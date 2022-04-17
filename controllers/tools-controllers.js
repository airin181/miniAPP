const toolsModels = require('../models/tools-models.js');

const createTool = async (req, res) => {

    try{
        console.log("Esto es req.body: ", req.body, "y esto es req.file: ", req.file); //bien

        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const img = req.file.destination

        const newTool = {
            name: name,
            price: price,
            description: description,
            image: img
        } // {} nuevo producto a guardar

        console.log("consolelog de newTool: ", newTool);

        await toolsModels.createTool(newTool);
        
        res.status(201).send('Todo funsiona - o casi todo')
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

const mytools = (req, res) => {
    res.render("mytools");
}

const tool = {
    createTool,
    home,
    mytools,
    form
}

module.exports = tool