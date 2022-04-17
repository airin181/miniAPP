const tools = require('../controllers/tools-controllers.js');
const router = require('express').Router();

const multer  = require('multer');
const upload = multer({dest: 'public/img'}) //donde meter esas imagenes


//home
router.get("/home", tools.home)

//form
router.post('/createTool', upload.single('image'), tools.createTool); //enviar datos formulario -- 'image' es el nombre indicado en el form
router.get('/form', tools.form); //obtener datos formulario

//mytools
router.get('/mytools', tools.mytools); //obtener los datos de las tools
router.post('/mytools'); // crear el contenido de las tools proviniente de la DB en esa ruta


module.exports = router;