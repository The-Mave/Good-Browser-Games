
const index = (req,res) => {
    console.log("Render de index funcionou!")
    res.render("Home/index");
}

const login = (req,res) => {
    console.log("Render de index funcionou!")
    res.render("Home/login");
}

const signup = (req,res) => {
    console.log("Render de index funcionou!")
    res.render("Home/signup");
}
const perfil =(req,res) =>{
    console.log("Você entrou no perfil")
    res.render("Home/perfil");
}
export default {
    index,
    login,
    signup,
    perfil

  };