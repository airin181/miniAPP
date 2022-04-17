
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3000;


//Rutas I
const toolsRouter = require('./routes/tools-routes'); 


/* const fetch = require('node-fetch') */
const env = require("dotenv").config(); 


app.set('view engine', 'pug');
app.set("views", "./views");

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));//Para poder leer los datos del req.body y así tratar luego en DB esa info
app.use(bodyParser.json());  




//Rutas II
app.use('/', toolsRouter) 

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server;