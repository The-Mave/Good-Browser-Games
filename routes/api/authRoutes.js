import express from "express";
import bodyParser from "body-parser"
import authController from "../../controllers/api/authController.js";
 
const router = express.Router();
const jsonParser = bodyParser.json()
router.use(jsonParser);


router
    .get('/auth/:id', jsonParser, authController.perfilUser)
    .get('/login', jsonParser, authController.login)
    .post('/auth/login', jsonParser, authController.loginUser)
    .get('/register', jsonParser, authController.registrar)
    .post('/auth/register', jsonParser, authController.registrarUser)

 export default router;