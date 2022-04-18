const toolsModels = require('../models/tools-models.js');
const firebase = require('../config/config-firebase.js');  // reference to our db 
const firestore = firebase.firestore(); // if using firestore
require("firebase/storage"); // must be required for this to work
const storage = firebase.storage().ref(); // create a reference to storage
global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug





// Add Image to Storage and return the file path
const addImage = async (req, res) => {
    try {
        // Grab the file
        const file = req.file;
        // Format the filename
        const timestamp = Date.now();
        const name = file.originalname.split(".")[0];
        const type = file.originalname.split(".")[1];
        const fileName = `${name}_${timestamp}.${type}`;
        
         // Step 1. Create reference for file name in cloud storage 
        const imageRef = storage.child(fileName);
        // Step 2. Upload the file in the bucket storage
        const snapshot = await imageRef.put(file.buffer);
        // Step 3. Grab the public url
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        res.send(downloadURL);
/*         return downloadURL;
 */     }  catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
}

const createTool = async (req, res) => {

    try{
        console.log("Esto es req.body: ", req.body, "y esto es req.file: ", req.file); 
        
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const file = `${addImage}`;

        const newTool = {
            name: name,
            price: price,
            description: description,
            image: file //aquí irá la URL de firebase
        } // {} nuevo producto a guardar

        console.log("consolelog de newTool: ", newTool);

        await toolsModels.createTool(newTool);

        res.status(201).send("todo bien");
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

const mytoolsView = (req, res) => {
    res.render("mytools");
}

const mytools = async (req, res) => {
    try{
        await toolsModels.getAllTools();
        res.status(201).render("mytools");

    }catch (error) {
        console.log(error);
    }
    }
    

const tool = {
    createTool,
    addImage,
    home,
    mytoolsView,
    mytools,
    form
}

module.exports = tool