import jogos from "../../models/Jogo.js";
import categorias from "../../models/Categoria.js";
import usuarios from "../../models/Usuario.js";

const dashboard = (req,res) => {
    console.log("Admin de index funcionou!")
    res.render("admin/index");
}

const adminObterJogos = (req, res) => {
  jogos.find()
  .populate('categoria')
  .then((result) => {
    res.render("admin/jogos", {
      jogos: result,
    });
  });
};

const adminObterCategorias = (req, res) => {
    categorias.find().then((result) => {
      res.render("admin/categorias", {
        categorias: result,
      });
    });
  };

const adminObterUsuarios = (req, res) => {
  usuarios.find().then((result) => {
    res.render("admin/usuarios", {
      usuarios: result,
    });
  });
};

// EDITOR CRUD


const adminEditarJogos = (req,res) => {
    const id = req.params.id;

    jogos.findById(id).then((result) => {
        res.render("Admin/jogos_edit", {
          jogo: result
        });
      });
}

const adminEditarCategorias = (req,res) => {
    const id = req.params.id;

    categorias.findById(id).then((result) => {
        res.render("Admin/categorias_edit", {
          categoria: result
        });
      });
}

const adminEditarUsuarios = (req,res) => {
    const id = req.params.id;

    usuarios.findById(id).then((result) => {
        res.render("Admin/usuarios_edit", {
          usuario: result
        });
      });
}

export default {
    dashboard,
    adminObterJogos,
    adminObterCategorias,
    adminObterUsuarios,
    adminEditarJogos,
    adminEditarCategorias,
    adminEditarUsuarios
  };