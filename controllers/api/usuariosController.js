import usuarios from "../../models/Usuario.js";

const listarUsuarios = (req, res) => {
  usuarios.find()
  .populate('jogos', 'titulo')
  .exec((err, usuarios) => {
    res.status(200).json(usuarios);
  });
};

const listarUsuarioPorId = (req, res) => {
  const id = req.params.id;

  usuarios.findById(id)
  .populate('jogos', 'titulo')
  .exec((err, livros) => {
    if (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Id do usuario não localizado.` });
    } else {
      res.status(200).send(livros);
    }
  });
};

const cadastrarUsuario = (req, res) => {
  let usuario = new usuarios(req.body);
  usuario.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Falha ao cadastrar o usuario` });
    } else {
      res.status(201).send(usuario.toJSON());
    }
  });
};

const atualizarUsuario = (req, res) => {
  const id = req.params.id;

  usuarios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const excluirUsuario = (req, res) => {
  const id = req.params.id;

  usuarios.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "Usuario removido com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const listarUsuarioPorCpf = (req, res) => {
  const cpf = req.query.cpf;

  usuarios.find({ cpf: cpf })
  .populate('jogos', 'titulo')
  .exec( {}, (err, usuarios) => {
    if (err) {
      res.status(400).send({ message: `CPF não encontrado` });
    } else {
      res.status(200).send(usuarios);
    }
  });
};

export default {
  listarUsuarios,
  listarUsuarioPorId,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
  listarUsuarioPorCpf
};
