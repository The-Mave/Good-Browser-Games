import jogos from "../../models/jogo.js";
import categorias from "../../models/categoria.js";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;

const index = (req, res) => {
    jogos.find()
    .populate('categoria')
    .then((result) => {
      let decodedToken = jwt.decode(req.cookies.authcookie);

      res.render("home/index", {
        jogos: result,
        isAuth: !!req.cookies.authcookie,
        user: {
          ...decodedToken
        }
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