import jogos from "../../models/jogo.js";
import comentarios from "../../models/comentario.js";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;

const index = (req, res) => {
    jogos.find()
    .populate('categoria')
    .then((result1) => {
      comentarios.find()
      .populate('usuario')
      .then((result2) => {

        let decodedToken = jwt.decode(req.cookies.authcookie);

        let aleatorio = shuffle(result1);
        let ordenado = ordenaPorAvaliacao(result1);

        res.render("home/index", {
          jogos: result1,
          jogosAleatorios: aleatorio,
          jogosOrdenados: ordenado,
          isAuth: !!req.cookies.authcookie,
          user: {
            ...decodedToken
          },
          comentarios: result2
        });
      })
    });
  };

const perfil =(req,res) =>{
    console.log("Você perfil no perfil")
    res.render("home/perfil");
}

// Array aleatório
function shuffle(array) {
  const novoArray = [...array];
  let currentIndex = novoArray.length, randomIndex;
  console.log(currentIndex);
  // While there remain elements to shuffle.
  while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [novoArray[currentIndex], novoArray[randomIndex]] = [
        novoArray[randomIndex], novoArray[currentIndex]];
  }

  return novoArray;
}

// Array mais bem avaliados

function ordenaPorAvaliacao(array) {
  const novoArray = [...array];
  novoArray.sort((a, b) => {
    return a.avaliacao - b.avaliacao;
});
  novoArray.reverse();
  return novoArray;
}

export default {
    index,
    perfil

  };