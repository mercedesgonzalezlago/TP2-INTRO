import {Objetivo} from "../model/ObjetivosModel.js";

export const obtenerObjetivos = async (req, res) => {
    try {
        let objetivos = await Objetivo.obtenerObjetivos();
        objetivos.sort((a, b) => a.id - b.id);
        res.status(200).json(objetivos);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los Objetivos' });
    }
};

export const obtenerObjetivoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const objetivo = await Objetivo.obtenerObjetivoPorId(id);
        if (!objetivo) return res.status(404).json({ error: "Objetivo no encontrado" });
        res.status(200).json(objetivo);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el Objetivo' });
    }
};

export const crearObjetivo = async (req, res) => {
    const { titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id } = req.body;
    try {
        const objetivo = await Objetivo.crearObjetivo({titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id});
        res.status(201).json(objetivo);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el Objetivo' });
    }
};

export const actualizarObjetivo = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id } = req.body;
    try {
        let objetivo = await Objetivo.obtenerObjetivoPorId(id);
        if (!objetivo) return res.status(404).json({ error: "Objetivo no encontrado" });

        objetivo = await Objetivo.actualizarObjetivo(id, {titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id});
        res.status(200).json({ message: 'Objetivo actualizado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el Objetivo' });
    }
};

export const eliminarObjetivo = async (req, res) => {
    const { id } = req.params;
    try {
        let objetivo = await Objetivo.obtenerObjetivoPorId(id);
        if (!objetivo) return res.status(404).json({ error: "Objetivo no encontrado" });

        objetivo = await Objetivo.eliminarObjetivo(id);
        res.status(200).json({ message: 'Objetivo eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el Objetivo' });
    }
};
