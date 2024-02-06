
 const productService= require('../data/productService')

// function getProducts(){
// 	return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
// }
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {

        res.render('index', {products: productService.getAll()})
		// const product=getProducts();
		// const inSaleProducts= products.filter((product)=> product.category === "in-sale");
		// const visitedProducts= products.filter((product)=> product.category === "visited");
		
		// res.render("index", { visitedProducts, inSaleProducts })
	},
	search: (req, res) => {
		res.send("Estas buscando:" + req.query.keywords)
	},

    // registerController: (req,res)=>{
    //     res.render(("./users/register"))
    // },

    aboutController: (req,res)=>{
        res.render(("about"))
    },
    carritoDeComprasController: (req,res)=>{
        res.render(("carritoDeCompras"))
    },
	
	
};

module.exports = controller;
