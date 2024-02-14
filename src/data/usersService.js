const users = require("../data/users.json");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");

const usersService = {
  users: JSON.parse(fs.readFileSync(usersFilePath, "utf-8")),

  getAll: function () {
    return this.users;
  },

  save: function (req) {
    console.log("creando usuario");
    let user = req.body;
    user.id = this.users[this.users.length - 1].id + 1;
    const image = req.file ? req.file.filename : "default-image.png";
    user.image = image;
    this.users.push(user);
    fs.writeFileSync(usersFilePath, JSON.stringify(this.users), "utf-8");
  },

  getOne: function (id) {
    let user = this.users.find((elem) => elem.id == id);
    return user;
  },

  delete: function (id) {
    indice = this.users.findIndex((elem) => elem.id == id);
    this.users.splice(indice, 1);
    fs.writeFileSync(usersFilePath, JSON.stringify(this.users), "utf-8");
  },

  edit: function (data, id) {
    let user = this.getOne(id);
    let userNuevo = data;
    user.firstname = userNuevo.firstname;
    user.lastName = userNuevo.lastName;
    user.email = userNuevo.email;
    user.password = userNuevo.password;
    //this.products[indice]= producto;
    fs.writeFileSync(usersFilePath, JSON.stringify(this.users), "utf-8");
  },
};

module.exports = usersService;
