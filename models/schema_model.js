const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    price: {
        type: Number,required: true
    },
    description: {
        type: String,required: true
    },
    image: {
        type: String
    }
}, {collection:'tools'});


// Crear el modelo
const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool; 