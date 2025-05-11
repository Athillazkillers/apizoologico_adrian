const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const usuarioRoutes = require("./routes/usuario");
const noticiaRoutes = require("./routes/noticia"); 
const categoriaRoutes = require("./routes/categoria"); 
const revisionRoutes = require("./routes/revision"); 
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); 
app.use(parser.json()); 

app.use("/api", usuarioRoutes);
app.use("/api", noticiaRoutes); 
app.use("/api", categoriaRoutes); 
app.use("/api", revisionRoutes); 

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

// Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
