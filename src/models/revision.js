const mongoose = require("mongoose"); // Importando el componente mongoose
const revisionSchema = mongoose.Schema({
  noticia: {
    type: mongoose.Schema.Types.ObjectId, // con esto almacenas la Noticia
    ref: "Noticia", 
    required: true, 
    unique: true, // esto te dice que el id de la noticia no se puede repetir
  },
  revisor: {
    type: String,
    required: true, 
  },
  aprobado: {
    type: Boolean,
    default: false, 
    required: true, 
  },
});
module.exports = mongoose.model("revision", revisionSchema);