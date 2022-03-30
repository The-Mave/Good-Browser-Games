import mongoose from "mongoose";
 
const categoriaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
},
{
    versionKey: false
});

const categorias = mongoose.model("categorias", categoriaSchema);

export default categorias;
