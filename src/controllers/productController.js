
const productService= require('../data/productService');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = productService.getAll();
		res.render("products", {products, toThousand})
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		res.render('detail', { product: productService.getOne(req.params.id)});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("create");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const products= productService.getAll();
		productService.save(req);
		res.redirect('/products');
	},


	// Update - Form to edit
	edit: (req, res) => {		
		res.render('edit', ({
		productToEdit: productService.getOne(req.params.id)
		}));

		
	},


	// Update - Method to update
	update: (req, res) => {
		productService.edit(req.body, req.params.id);
		res.redirect("/products/detail/"+req.params.id);
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		productService.delete(req.params.id);
		res.redirect("/products");
	},
};

module.exports = controller;