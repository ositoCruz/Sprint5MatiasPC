
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
	// 	const{id} =req.params
	// 	const products=productService.getAll();
	// 	const product = products.find((product) => product.id == id);
	
	// 	if(!product){
	// 	res.redirect("/")
	// }
	// res.render("detail", { product })

	},

	// Create - Form to create
	create: (req, res) => {
		res.render("create");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const products= productService.getAll();
		//req.body.image= req.file.filename;
		productService.save(req);
		res.redirect('/products');
		// 

		// const image= req.file ? req.file.filename: "default-image.png";
		
		// const newProduct= {
		// 	id: products[products.length -1].id +1,
		// 	name: req.body.name,
		// 	precio: req.body.precio,
		// 	descuento: req.body.descuento,
		// 	category:req.body.category,
		// 	tipo: req.body.tipo,
		// 	descripcion: req.body.descripcion, 
		// 	image,
		// }

		// products.push(newProduct)

		// fs.writeFileSync(productsFilePath, JSON.stringify(products));	
		// res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {		
		console.log("llega a edit1")
		res.render('edit', ({
		productToEdit: productService.getOne(req.params.id)
		}));

		
	},

	// edit: (req, res) => {
	// 	let id = req.params.id;
	// 	globalThis.productToEdit = null;
	// 	for (let i=0; i<products.length; i++) {
	// 		if (product[i].id == id) {
	// 			productToEdit = product[i];
	// 		}
	// 	}
	// 	res.render('edit', { productToEdit })
	// },








	// Update - Method to update
	update: (req, res) => {
		productService.edit(req.body, req.params.id);
		res.redirect("/products/detail/"+req.params.id);


		// const { id } = req.params;
		// const products = productService.getAll();
		// const updatedProductIndex = products.findIndex((product) => product.id == id);
	
		// if (updatedProductIndex === -1) {
		// 	res.redirect("/products");
		// } else {
		// 	products[updatedProductIndex] = {
		// 		...products[updatedProductIndex],
		// 		name: req.body.name,
		// 		precio: req.body.precio,
		// 		descuento: req.body.descuento,
		// 		category: req.body.category,
		// 		descripcion: req.body.descripcion,

				
		// 		// Update other fields accordingly
		// 	};
	
		// 	fs.writeFileSync(productsFilePath, JSON.stringify(products));
		// 	res.redirect("/products");
		// }
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		productService.delete(req.params.id);
		res.redirect("/products");

		// const { id } = req.params;
		// let products = productService.getAll();
		// products = products.filter((product) => product.id != id);
	
		// fs.writeFileSync(productsFilePath, JSON.stringify(products));
		// res.redirect("/products");
	},
};

module.exports = controller;