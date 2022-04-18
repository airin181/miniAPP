const express = require('express');
const multer  = require('multer');
const tools = require('../controllers/tools-controllers.js');

const routes = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage: storage}).single('file');


/* const upload = multer({dest: 'public/img'}) */ //donde meter esas imagenes



//home
routes.get("/home", tools.home)

//form
routes.post('/createTool', tools.createTool);
routes.post('/upload', upload, tools.addImage) //enviar datos formulario -- 'image' es el nombre indicado en el form
routes.get('/form', tools.form); //obtener datos formulario

//mytools
routes.get('/mytoolsView', tools.mytoolsView); //obtener los datos de las tools
routes.post('/mytools', tools.mytools); // crear el contenido de las tools proviniente de la DB en esa ruta


module.exports = routes;