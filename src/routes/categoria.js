const express = require("express");
const router = express.Router(); // manejador de rutas de express
const categoriaSchema = require("../models/categoria");


router.post("/categoria", (req, res) => {
    const categoria = new categoriaSchema(req.body);
    categoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


router.get("/categoria", (req, res) => {
    categoriaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


router.put("/categoria/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    categoriaSchema.updateOne({ _id: id }, { $set: { nombre } })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


router.delete("/categoria/:id", (req, res) => {
    const { id } = req.params;
    categoriaSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;