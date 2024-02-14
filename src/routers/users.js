const express = require('express');
const router = express.Router();
const path = require("path");
const Upload= require("../middlewares/multerUsers");
const userController = require("../controllers/usersController");
const registerValidations= require('../middlewares/registerValidations')
const userValidate= require('../middlewares/userValidate');


/************************************************ */

// router.get('/register', registerValidations, userController.registerController);
// router.post("/users", upload.single("image"), userController.store);
// router.post("/", registerValidations, userController.register);
// router.get('/login', registerValidations, userController.loginController);
// router.get('/admin', userValidate, userController.loginController);

/*** GET ALL USERS ***/
router.get("/", userController.index);


/*** CREATE ONE USER ***/
router.get("/register",registerValidations, userController.register);
router.post("/", Upload.single("image"), userController.store);


/*** GET ONE PRODUCT ***/
router.get("/profile/:id", userController.detail);

/**********LOGIN*********/

router.get("/login", userController.login);


/*** GET ONE USER ***/
 router.get("/profile/:id", userController.edit);

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', userController.edit);
router.put('/:id', userController.update);

/*** DELETE ONE USER***/
router.delete('/:id', userController.destroy);




module.exports= router;