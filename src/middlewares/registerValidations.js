
const {check}= require("express-validator");

let registerValidations= [
    check('firstName').notEmpty().withMessage("El nombre no puede estar Vacio"),
    check('lastName').notEmpty().withMessage("El Apellido no puede estar Vacio"), 
    check('email').notEmpty().withMessage("El email no puede estar Vacio"), 
    check('password ').notEmpty().withMessage("La contraseña no puede estar Vacio"),
]

module.exports= registerValidations;