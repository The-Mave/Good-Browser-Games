import usuarios from "../../models/usuario.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { request } from "express";

const jwt = jsonwebtoken
const User = usuarios

const secret = 'palavracabalistica' 

const login = (req,res) => {
  console.log("Render de index funcionou!")
  res.render("Home/login");
};

const registrar = (req,res) => {
  console.log("regitsrar")
  console.log("Render de index funcionou!")
  res.render("Home/signup");
};




// ROTAS COM AUTENTICAÇÃO
const perfilUser = async (req, res) => {
  const id = req.params.id;
  const result = checkToken(req,res)
  

  if (result){
    const user = await User.findById(id, "-passwordHash");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
  }
};

const checkToken = (req, res) => {

  const authHeader = req.headers["authorization"];

  console.log("----------------------------------")
  console.log("------------CheckToken------------")
  console.log("----------------------------------")
  console.log("authHeader: " + authHeader)

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
  try {
    jwt.verify(token, secret);
    console.log("token: " + token)
    console.log("secret: " + secret)
    return true

  } catch (err) {
    console.log(err)
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}


const loginUser = async(req,res) => {
  const { email, senha } = req.body;

  // VALIDACOES
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // VERIFICAR S EO EMAIL JA ESTA REGISTRADO
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  // VERIFICAR SE A SENHA BATE
  
  const checkPassword = await bcrypt.compare(senha, user.passwordHash);
  console.log("Senha: " + senha)
  console.log("Senha Crypt: " + user.passwordHash)
  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    res.setHeader('authorization', 'Bearer ' + token)
    res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    
    // VERIFICACAO DO TOKEN

  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const  registrarUser = async(req,res) => {
  const {nome, sobrenome, email, senha, confirmarsenha, cpf, nascimento} = req.body
  const administrador = false

  // VERIFICAR SE É NECESSARIO CRIAR O USERNAME
  if (!nome) {
    return res.status(422).json({ msg: "O campo nome é obrigatório!" });
  }

  if (!sobrenome) {
    return res.status(422).json({ msg: "O campo sobrenome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O campo email é obrigatório!" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "A campo senha é obrigatório!" });
  }

  if (senha != confirmarsenha) {
    return res
      .status(422)
      .json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }
  if (!cpf) {
    return res.status(422).json({ msg: "A campo cpf é obrigatório!" });
  }
  if (!nascimento) {
    return res.status(422).json({ msg: "A campo cpf é obrigatório!" });
  }

  // VERIFICAR SE O USUARIO EXISTE (CASO EXISTA NÃO CADASTRA)
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "Usuário já cadastrado, utilize outro e-mail ou faça login." });
  }

  // CRIAR SENHA
  const salt = await bcrypt.genSalt(12); // O SALT SERVE PARA CRIAR UM NUMERO ALEATORIO 
  const passwordHash = await bcrypt.hash(senha, salt); // O BCRYPT CRIPTOGRAFA A SENHA DO USUARIO, EMBARALHANDO COM O SALT

  // CRIAR O USUARIO
  const user = new User({
    nome,
    sobrenome,
    email,
    cpf, 
    nascimento,
    passwordHash,
    administrador
  });

  try {
    await user.save();

    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


export default {
  registrarUser,
  registrar,
  login,
  loginUser,
  perfilUser
};
