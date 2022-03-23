import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categorias'},
  avaliacao: { type: Number, required: true },
  descricao: { type: String, required: false },
  qtd_avaliacoes: { type: Number, required: true },
  url: { type: String, required: true },
  imagem: { type: String, required: true }
},
{
  versionKey: false
});

const jogos = mongoose.model("jogos", jogoSchema);

export default jogos;
