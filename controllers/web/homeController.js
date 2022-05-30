import jogos from "../../models/jogo.js";
import categorias from "../../models/categoria.js";

const index = (req, res) => {
    jogos.find()
    .populate('categoria')
    .then((result) => {
      res.render("home/index", {
        jogos: result,
      });
    });
  };

const perfil =(req,res) =>{
    console.log("Você perfil no perfil")
    res.render("home/perfil");
}
export default {
    index,
    perfil

  };