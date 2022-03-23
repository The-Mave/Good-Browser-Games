import categorias from "../../models/Categoria.js";


const listarCategorias = (req, res) => {
  categorias.find((err, categorias) => {
    res.status(200).json(categorias);
  });
};

const listarCategoriaPorId = (req, res) => {
  const id = req.params.id;

  categorias.findById(id, (err, livros) => {
    if (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Id do categoria não localizado.` });
    } else {
      res.status(200).send(livros);
    }
  });
};

const cadastrarCategoria = (req, res) => {
  let categoria = new categorias(req.body);
  categoria.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Falha ao cadastrar o categoria` });
    } else {
      res.status(201).send(categoria.toJSON());
    }
  });
};

const atualizarCategoria = (req, res) => {
  const id = req.params.id;

  categorias.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const excluirCategoria = (req, res) => {
  const id = req.params.id;

  categorias.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "Categoria removido com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

export default {
  listarCategorias,
  listarCategoriaPorId,
  cadastrarCategoria,
  atualizarCategoria,
  excluirCategoria
};
