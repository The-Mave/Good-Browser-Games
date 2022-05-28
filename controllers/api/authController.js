import usuarios from "../../models/usuario.js";
import bcrypt from "bcrypt";

const User = usuarios
 
const  registrarUser = async(req,res) => {
  const {nome, sobrenome, email, senha, confirmarsenha, cpf, nascimento} = req.body
  const administrador = false

// VALIDACOES
// JSON DE TESTE
//   {
// 	  "email": "matheus_dasa@hotmail.com",
// 		"senha":"",
// 		"confirmarsenha":"senha123",
//     "cpf": "12345678954", 
//     "nascimento": "04/11/1999"
// }

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
  registrarUser
};
