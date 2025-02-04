import {Tarea} from "../model/TareaModel.js";

export const crearTarea = async (req, res) => {
    const { descripcion, fechaLimite, estado, objetivoId } = req.body;
    try {
        const result = await Tarea.crearTarea(descripcion, fechaLimite, estado, objetivoId);
        res.status(201).json({ id: result.insertId, descripcion, fechaLimite, estado, objetivoId });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
};

export const obtenerTarea = async (req, res) => {
    try {
        const results = await Tarea.obtenerTareas();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las tarea' });
    }
};

export const obtenerTareaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Tarea.obtenerTareaPorId(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
};

export const actualizarTarea = async (req, res) => {
    const { descripcion, fechaLimite, estado } = req.body;
    try {
        const result = await Tarea.actualizarTarea(id, descripcion, fechaLimite, estado);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea actualizada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
};

export const eliminarTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Tarea.eliminarTareas(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
};
