const {validationsResult} = require ('express-validator');

const userController = {
    registerController: (req,res)=>{
        res.render(("./users/register"))
    },

    register: function(req , res){
        
        if(!validationsResult(req).isEmpty()){
            res.render(("./users/register"), {errors: validationsResult(req).errors})
        }
        else{
            res.status(200).send("Registro exitoso. Bienvenido a Purum");
        }
    },
    loginController: (req,res)=>{
        res.render(("./users/login"))
    }
}

module.exports= userController;
