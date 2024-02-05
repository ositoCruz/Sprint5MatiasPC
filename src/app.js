const express = require('express');
const app = express();
const path= require("path");
const methodOverride = require('method-override');
const routerMain=require('./routers/main');
const productsRouter = require('./routers/products');

const PORT= process.env.PORT || 3001;


app.use(express.static(path.join('./public')));
app.use(methodOverride('_method'));
app.use (express.urlencoded ({extended: true }));
app.use(express.json());
/********************INDICE DE RUTEO*****************/
app.use("/", routerMain);

/********************INDICE DE PRODUCTOS***************/
app.use('/products', productsRouter);

/***********************************************/
app.use('/login', routerMain);
app.use('/register', routerMain);
app.use('/about', routerMain);
app.use('/carritoDeCompras', routerMain);

/***************MIDDLEWARES************ */
app.set('views', path.join(__dirname, '/views'));

 //para poder pisar el method= "Post" en el formulario por put y delete







app.set("view engine", "ejs");



app.listen(PORT, ()=>{
    console.log(`Servidor andando en puerto: http://localhost:${PORT}`);
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
