import express from "express"
import jogos from "./api/jogosRoutes.js"
import usuarios from "./api/usuariosRoutes.js"
import categorias from "./api/categoriasRoutes.js"
import auth from "./api/authRoutes.js"
import admin from "./web/adminRoutes.js"
import home from "./web/homeRoutes.js"


    const routes = (app) => {
        app.route('/').get((req, res) =>{
            res.status(200).render('home',{});
        })

    app.use(
        express.json(),
        auth,
        jogos,
        usuarios,
        categorias,
        admin,
        home
    )
}

export default routes