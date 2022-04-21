const toolsModels = require('../models/tools-models.js');
const mongo = require('../utils/mongo.js');
const mongoSchema = require('../models/schema_model')

const firebase = require('../utils/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = getStorage();


const createTool = async (req, res) => {

    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    let image;
    const file = req.file;

    const fileName = file.originalname;

    const metadata = {
        contentType: 'image/jpeg'
    };
    const storageRef = ref(storage, 'images/' + fileName);

    try{
    //......FIREBASE
    await uploadBytes(storageRef, file.buffer, metadata).then(async (snapshot) => {
        console.log('Uploaded a file!')
        image = await getDownloadURL(storageRef);
    })
        await toolsModels.createTool({
            name: name,
            price: price,
            description: description,
            image: image 
        });
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