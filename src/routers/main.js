// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search);  
router.get('/login', mainController.loginController);
router.get('/register', mainController.registerController);
router.get('/carritoDeCompras', mainController.carritoDeComprasController);
router.get('/about', mainController.aboutController);

// router.get(routes.homeRoute, controller.homeController);

module.exports = router;
