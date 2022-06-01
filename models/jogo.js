import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categorias', required: true },
  avaliacao: { type: Number },
  descricao: { type: String, required: false },
  qtd_avaliacoes: { type: Number },
  url: { type: String, required: true },
  imagem: { type: String, required: true },
  comentarios: [{
    nome: { type: String },
    sobrenome: { type: String },
    comentario: { type: String },
    avaliacao: { type: Number },
  }]
},
  {
    versionKey: false
  });

const jogos = mongoose.model("jogos", jogoSchema);

export default jogos;
