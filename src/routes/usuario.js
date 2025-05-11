const express = require("express");
const router = express.Router(); // manejador de rutas de express
const usuarioSchema = require("../models/usuario");


router.post("/usuario", (req, res) => {
    const usuario = new usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


router.get("/usuario", (req, res) => {
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


router.put("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña } = req.body;
    usuarioSchema.updateOne({ _id: id }, { $set: { usuario, contraseña } })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
