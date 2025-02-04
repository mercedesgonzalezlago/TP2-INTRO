import { Persona } from '../model/PersonaModel.js';

export const obtenerPersonas = async (req, res) => {
    try {
        const personas = await Persona.obtenerPersonas();
        res.status(200).json(personas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener personas" });
    }
};

export const obtenerPersonaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const persona = await Persona.obtenerPersonaPorId(id);
        if (!persona) return res.status(404).json({ error: "Persona no encontrada" });
        res.json(persona);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la persona" });
    }
};

export const crearPersona = async (req, res) => {
    const { nombre, email, telefono } = req.body;
    try {
        const persona = await Persona.crearPersona({ nombre, email, telefono });
        res.status(201).json(persona);
    } catch (error) {
        res.status(500).json({ error: "Error al crear persona" });
    }
};

export const actualizarPersona = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    try {
        let persona = await Persona.obtenerPersonaPorId(id);
        if (!persona) return res.status(404).json({ error: "Persona no encontrada" });

        persona = await Persona.actualizarPersona(id, { nombre, email, telefono });
        res.status(200).json({ message: 'Persona actualizada' });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar persona" });
    }
};

export const eliminarPersona = async (req, res) => {
    const { id } = req.params;
    try {
        let persona = await Persona.obtenerPersonaPorId(id);
        if (!persona) return res.status(404).json({ error: "Persona no encontrada" });

        persona = await Persona.eliminarPersona(req.params.id);
        res.json({ message: "Persona eliminada" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar persona" });
    }
};
