const validarUsuario= (req, res, next) => {
    const arrayUsers= ["Matias", "Lorena", "Leandro"];
    const usuario= req.query.user;
    const existe= arrayUsers.includes(usuario);
    let mensaje="";
    if(existe){
        res.send("No tienes privilegios para ingresar");
    }
    req.user= usuario;
    next();

}

module.exports= validarUsuario;