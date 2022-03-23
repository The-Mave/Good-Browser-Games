import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true },
  nascimento: { type: String, required: true },
  cpf: { type: String, required: true },
  imgagem: { type: String, required: true },
  jogos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'jogos'}],
  administrador: { type: Boolean, required: true },
},
{
    versionKey: false
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
