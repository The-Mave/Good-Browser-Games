import jogos from "../../models/Jogo.js";

const listarJogos = (req, res) => {
  jogos.find()
  .populate('categoria')
  .exec((err, jogos) => {
    res.status(200).json(jogos);
  });
};

const listarJogoPorId = (req, res) => {
  const id = req.params.id;

  jogos.findById(id)
  .populate('categoria')
  .exec((err, livros) => {
    if (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Id do jogo não localizado.` });
    } else {
      res.status(200).send(livros);
    }
  });
};

const cadastrarJogo = (req, res) => {
  let jogo = new jogos(req.body);
  jogo.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Falha ao cadastrar o jogo` });
    } else {
      res.status(201).send(jogo.toJSON());
    }
  });
};

const atualizarJogo = (req, res) => {
  const id = req.params.id;

  jogos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "Jogo atualizado com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const excluirJogo = (req, res) => {
  const id = req.params.id;

  jogos.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "Jogo removido com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const listarJogoPorCategoria = (req, res) => {
  const categoria = req.query.categoria;

  jogos.find({ categoria: categoria })
  .populate('categoria')
  .exec( {}, (err, jogos) => {
    if (err) {
      res.status(400).send({ message: `Categoria não encontrada` });
    } else {
      res.status(200).send(jogos);
    }
  });
};

export default {
  listarJogos,
  listarJogoPorId,
  cadastrarJogo,
  atualizarJogo,
  excluirJogo,
  listarJogoPorCategoria
};
