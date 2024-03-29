const express = require('express');
const app = express();
const path= require("path");
const methodOverride = require('method-override');
const routerMain=require('./routers/main');
const productsRouter = require('./routers/products');
const usersRouter= require('./routers/users');  
const userLogMiddleware = require('./middlewares/userLogs');

const PORT= process.env.PORT || 3001;

/*****************MIDDLEWARES**************************************/
app.use(express.static(path.join('./public')));
app.use(methodOverride('_method'));
app.use (express.urlencoded ({extended: true }));
app.use(express.json());
//app.use(userLogMiddleware); PARA SABER LOS LOGS DEL USUARIO



/********************INDICE DE RUTEO*****************/
app.use("/", routerMain);

/********************INDICE DE PRODUCTOS***************/
app.use('/products', productsRouter);

/******************INDICE DE USERS****************/
app.use('/users', usersRouter);
/***********************************************/

// app.use('/login', routerMain);
// app.use('/register', routerMain);
app.use('/about', routerMain);
app.use('/carritoDeCompras', routerMain);

/***************MIDDLEWARES************ */
app.set('views', path.join(__dirname, '/views'));

app.set("view engine", "ejs");



app.listen(PORT, ()=>{
    console.log(`Servidor andando en puerto: http://localhost:${PORT}`);
});

app.use((req, res, next)=>{
    res.status(404).render("error404")
    next();
});


/*app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carritoDeCompras.html')});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/details', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});*/
