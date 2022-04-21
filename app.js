const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3000;
const env = require("dotenv").config(); 
const cors = require('cors');

require('./utils/mongo.js');

//Rutas I
const toolsRouter = require('./routes/tools-routes'); 

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));//Para poder leer los datos del req.body y así tratar luego en DB esa info


//Rutas II
app.use('/', toolsRouter) 

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server;