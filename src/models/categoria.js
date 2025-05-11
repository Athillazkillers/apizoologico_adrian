const mongoose = require("mongoose"); // importando el componente mogoose
const categoriaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
});
module.exports = mongoose.model("categoria", categoriaSchema);