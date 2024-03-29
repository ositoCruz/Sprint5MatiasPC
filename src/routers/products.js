// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
const upload= require("../middlewares/multerProductos");

// ************ Controller Require ************
const productsController = require("../controllers/productController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);
router.post("/", upload.single("image"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/:id', productsController.destroy);

module.exports = router;
