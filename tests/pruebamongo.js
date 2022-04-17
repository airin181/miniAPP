//requirements:
const mongoose = require('mongoose')
const Tool = require("../models/schema_model.js");
const { ObjectId } = require('../utils/mongo');
//prueba:

(async () => {
    const newTool = await Tool.create({
        name: 'prueba1',
        price: '3',
        description: 'holaaaaa',
        image: 'image.jpg'
    });
    console.log(newTool);
    })();