const toolsModels = require('../models/tools-models.js');
const mongo = require('../utils/mongo.js');
const mongoSchema = require('../models/schema_model')


const createTool = async (req, res) => {

    try{
          const newTool = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.destination
        } // {} nuevo producto a guardar

        console.log("consolelog de newTool: ", newTool);
        await toolsModels.createTool(newTool);
        res.status(201).redirect(`${process.env.URL_BASE}/mytools`)
    }

    catch (error) {
        res.status(400).send(error);
   }
} 

const form = (req, res) => { 
    res.render("form");
}

const home = (req, res) => {
    res.render("home");
}

const getAllTools = async(req, res) => {
    let data;
 /*    const tool = {
        name: req.params.name,
        price: req.params.price,
        description: req.params.description,
        image: req.params.destination
    } */
    try {
        data = await mongoSchema.find({});
        res.status(200).render("mytools", {"tools":data});

    } catch (error) {
        res.status(400).json({"error":error});
    }
}


const tool = {
    createTool,
    home,
    getAllTools,
    form
}

module.exports = tool