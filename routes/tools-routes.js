const express = require('express');
const multer  = require('multer'); 

const tools = require('../controllers/tools-controllers.js');

const routes = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image'); //donde meter esas imagenes

//home
routes.get("/home", tools.home)

//form
routes.post('/createTool', upload, tools.createTool); //crear datos y guardar en DB
routes.get('/form', tools.form); //obtener datos formulario

//mytools
 routes.get('/mytools', tools.getAllTools); //obtener los datos de las tools y renderizarlo en ruta

module.exports = routes;