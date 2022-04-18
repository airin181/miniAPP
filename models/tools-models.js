//Aquí operaciones con la base de datos. Es decir, función para crear tool + función leer todas las tools

//requirements:
const mongoose = require('mongoose')
const Tool = require("./schema_model.js");
const { ObjectId } = require('../utils/mongo');


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

/*  const getAllTools = async () => {
    try {
        const getAllTools = await schema.find({});
        return getAllTools;        
    } catch (error) {
        console.log(error);
    }
}  */


const tool = {
    createTool,
/*     getAllTools
 */}

module.exports = tool

