import express from "express";
import adminController from "../../controllers/web/adminController.js"

const router = express.Router();

router
    .get("/admin/dashboard", adminController.dashboard)

    .get("/admin/jogos", adminController.adminObterJogos)
    .get("/admin/categorias", adminController.adminObterCategorias)
    .get("/admin/usuarios", adminController.adminObterUsuarios)

    .get("/admin/jogos/edit/:id", adminController.adminEditarJogos)
    .get("/admin/categorias/edit/:id", adminController.adminEditarCategorias)
    .get("/admin/usuarios/edit/:id", adminController.adminEditarUsuarios)

    .get("/admin/jogos/create", adminController.adminCriarJogos)
    .get("/admin/categorias/create", adminController.adminCriarCategorias)
    .get("/admin/usuarios/create", adminController.adminCriarUsuarios)

export default router;