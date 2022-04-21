require('dotenv').config();

const express = require('express')
const app = express();

const bodyParser = require('body-parser')
const port = process.env.PORT; 
const cors = require('cors');
const path = require('path');
const helmet = require("helmet");


require('./utils/mongo.js');

//Rutas I
const toolsRouter = require('./routes/tools-routes'); 

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: {
    useDefaults: true,
      directives: {
        
        "img-src": ["'https://miniapp-tools.herokuapp.com'", "https: data:"]
      }
    }
  }));
  
app.use(express.urlencoded({extended:true}));//Para poder leer los datos del req.body y así tratar luego en DB esa info


//Rutas II
app.use('/', toolsRouter) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})