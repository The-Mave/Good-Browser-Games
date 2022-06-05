import jogos from "../../models/jogo.js";
import categorias from "../../models/categoria.js";
import usuarios from "../../models/usuario.js";

const dashboard = (req,res) => {
  jogos.find()
  .populate('categoria')
  .then((result1) => {
    usuarios.find().then((result2) => {
      categorias.find().then((result3) => {

        let jogosOrdenadosPorAvaliacao = ordenaPorAvaliacao(result1);
        let jogosOrdenadosPorQuantidadeAvaliacao = ordenaPorQuantidadeAvaliacao(result1);
        let usuariosOrdenadosPorQuantidadeAvaliacao = ordenaPorQuantidadeAvaliacao(result2);
        let categoriasOrdenadasPorQuantidadeAvaliacao = ordenaPorQuantidadeAvaliacao(result3);
        


    res.render("admin/index", {
      jogos1: jogosOrdenadosPorQuantidadeAvaliacao,
      jogos2: jogosOrdenadosPorAvaliacao,
      usuarios: usuariosOrdenadosPorQuantidadeAvaliacao,
      categorias: categoriasOrdenadasPorQuantidadeAvaliacao
    });
  });
})
  })
};

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
        res.render("admin/jogos_edit", {
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
        res.render("admin/categorias_edit", {
          categoria: result
        });
      });
}

const adminEditarUsuarios = (req,res) => {
    const id = req.params.id;

    usuarios.findById(id).then((result) => {
        res.render("admin/usuarios_edit", {
          usuario: result
        });
      });
}

// CREATE CRUD

const adminCriarUsuarios = (req,res) => {

  res.render("admin/usuarios_create");
}

const adminCriarJogos = (req,res) => {
  categorias.find().then((result) => {
    res.render("admin/jogos_create", {
      categorias: result,
    });
  });
};

const adminCriarCategorias = (req,res) => {
res.render("admin/categorias_create");
}


// FUNÇÕES PARA ORDENAÇÃO DOS JOGOS SEGUNDO OS CRITÉRIOS DO RELATÓRIO SOLICITADOS PELO PROFESSOR
// Array maior número de avaliações

function ordenaPorQuantidadeAvaliacao(array) {
  const novoArray = [...array];
  novoArray.sort((a, b) => {
    return a.qtd_avaliacoes - b.qtd_avaliacoes;
});
  novoArray.reverse();
  const novoArray5 = novoArray.slice(0, 5)
  return novoArray5;
}

// Array mais bem avaliados

function ordenaPorAvaliacao(array) {
  const novoArray = [...array];
  novoArray.sort((a, b) => {
    return a.avaliacao - b.avaliacao;
});
  novoArray.reverse();
  const novoArray5 = novoArray.slice(0, 5)
  return novoArray5;
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

