const express = require('express');
const router = express.Router();
const path = require("path");
const upload= require("../middlewares/multerProductos");

const userController = require("../controllers/usersController");


/************************************************ */

router.get('/register', userController.registerController);
router.get('/login', userController.loginController);

module.exports= router;