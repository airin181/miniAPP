//Aquí operaciones con la base de datos. Es decir, función para crear tool + función leer todas las tools

//requirements:
const mongoose = require('mongoose')
const Tool = require("./schema_model.js");
const { ObjectId } = require('../utils/mongo.js');


//funciones:
const createTool = async (data) => {
    try{
        console.log("console log de tool en Models: ", data);

        const newTool = new Tool(data);
        await Tool.create(newTool);

    } catch (error) {
        throw error
    }
}



const tool = {
    createTool,
 }

module.exports = tool

