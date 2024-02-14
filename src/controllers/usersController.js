const {validationResult} = require ('express-validator');
const usersService= require('../data/usersService');

const userController = {
  // Root - Show all products
	index: (req, res) => {
		const users = usersService.getAll();
		res.render("./users/users", {users})
	},

	login: (req, res)=>{
		res.render("./users/login");

	},

	// Detail - Detail from one product
	detail: (req, res) => {

		res.render('./users/profile', { user: usersService.getOne(req.params.id)});
	},

	// Create - Form to create
	register: (req, res) => {
		res.render("./users/register");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const users= usersService.getAll();
		usersService.save(req);
		res.redirect("./users");
	},


	// Update - Form to edit
	edit: (req, res) => {		
		res.render('./users/userEdit', ({
		userToEdit: usersService.getOne(req.params.id)
		}));

		
	},


	// Update - Method to update
	update: (req, res) => {
		usersService.edit(req.body, req.params.id);
		res.redirect("/users/profile/"+req.params.id);
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		usersService.delete(req.params.id);
		res.redirect("/");
	},
}

module.exports= userController;
