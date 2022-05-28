import express from "express";
import bodyParser from "body-parser"
import authController from "../../controllers/api/authController.js";
 
const router = express.Router();
const jsonParser = bodyParser.json()
router.use(jsonParser);


router
    .post('/auth/register', jsonParser, authController.registrarUser)

 export default router;