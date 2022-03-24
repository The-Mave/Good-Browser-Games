import express from "express";
import homeController from "../../controllers/web/homeController.js"

const router = express.Router();

router
    .get("/", homeController.index)
    .get("/login", homeController.login)
    .get("/signup", homeController.signup)

export default router;