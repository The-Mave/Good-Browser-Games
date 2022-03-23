import express from "express"
import path from "path"
import routes from "./routes/index.js"
import db from "./config/dbConnect.js"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.static('Content'));

app.set("port", process.env.PORT || 3000);

app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");

//app.use("/", require("./routes/web")); 

app.listen(app.get("port"),function(){
    console.log("Server started at port " + app.get("port"));
});


db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});


routes(app);

export default app;
