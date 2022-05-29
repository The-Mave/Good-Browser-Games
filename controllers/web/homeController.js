
const index = (req,res) => {
    console.log("Render de index funcionou!")
    res.render("Home/index");
}

const perfil =(req,res) =>{
    console.log("Você perfil no perfil")
    res.render("Home/perfil");
}
export default {
    index,
    perfil

  };