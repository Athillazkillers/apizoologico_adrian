const mongoose = require("mongoose"); // importando el componente mogoose
const noticiaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    fechapublicación: {
        type: Date,
        required: true,
    },
    encabezado: {
        type: String,
        required: true,
    },
    Contenido: {
        type: String,
        required: true,
    },
    revision: { 
        type: mongoose.Schema.Types.ObjectId, //aqui almacenas un ID de una noticia en otro esquema
        ref: "revision", // este es el esquema que se llama (ese ref es que referencia a otro esquema)
        required: true, // esto significa que si o si se tiene que tener una revision
    }, 
    revisó: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId, //aqui es lo mismo que en el anterior, pero este es el esquema de categoria ok?
        ref: 'categoria',
        required: true, 
    },
});
module.exports = mongoose.model("Noticia", noticiaSchema);
