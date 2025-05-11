const express = require("express");
const router = express.Router(); // manejador de rutas de express
const Revision = require("../models/revision");

// Crear una nueva revisión
router.post("/revision", (req, res) => {
    const revision = new Revision(req.body);
    revision
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener todas las revisiones
router.get("/", async (req, res) => {
    try {
        const revisiones = await Revision.find().populate("noticia");
        res.json(revisiones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las revisiones" });
    }
});

// Obtener una revisión por ID
router.get("/:id", async (req, res) => {
    try {
        const revision = await Revision.findById(req.params.id).populate("noticia");
        if (!revision) {
            return res.status(404).json({ error: "Revisión no encontrada" });
        }
        res.json(revision);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la revisión" });
    }
});

// Actualizar una revisión por ID
router.put("/revision/:id", (req, res) => {
    const { id } = req.params;
    const { noticia, revisor, aprobado } = req.body;
    Revision.updateOne(
        { _id: id },
        { $set: { noticia, revisor, aprobado } }
    )
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Eliminar una revisión por ID
router.delete("/revision/:id", (req, res) => {
    const { id } = req.params;
    Revision.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;