import jogos from "../../models/jogo.js";
import categorias from "../../models/categoria.js";
import usuarios from "../../models/usuario.js";

const dashboard = (req,res) => {
    console.log("Admin de index funcionou!")
    res.render("admin/index");
}

// READ

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

// UPDATE CRUD


const adminEditarJogos = (req,res) => {
    const id = req.params.id;
    categorias.find().then((categorias) => {
    jogos.findById(id).then((jogo) => {
        res.render("Admin/jogos_edit", {
          jogo: jogo,
          categorias: categorias
        })
      })
    }
    )
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

// CREATE CRUD

const adminCriarUsuarios = (req,res) => {

  res.render("Admin/usuarios_create");
}

const adminCriarJogos = (req,res) => {
  categorias.find().then((result) => {
    res.render("Admin/jogos_create", {
      categorias: result,
    });
  });
};

const adminCriarCategorias = (req,res) => {
res.render("Admin/categorias_create");
}
export default {
dashboard,
adminObterJogos,
adminObterCategorias,
adminObterUsuarios,
adminEditarJogos,
adminEditarCategorias,
adminEditarUsuarios,
adminCriarCategorias,
adminCriarJogos,
adminCriarUsuarios
};

