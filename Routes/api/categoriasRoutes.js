import express from "express";
import categoriaController from "../../controllers/api/categoriasController.js"

const router = express.Router();

router
    .get("/categorias", categoriaController.listarCategorias)
    .get("/categorias/:id",  categoriaController.listarCategoriaPorId)
    .post("/categorias",  categoriaController.cadastrarCategoria)
    .put("/categorias/:id",  categoriaController.atualizarCategoria)
    .delete("/categorias/:id",  categoriaController.excluirCategoria)

export default router;