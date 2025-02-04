import {Tarea} from "../model/TareaModel.js";

export const obtenerTarea = async (req, res) => {
    try {
        const tareas = await Tarea.obtenerTareas();
        res.status(200).json(tareas);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
};

export const obtenerTareaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.obtenerTareaPorId(id);
        if (tarea.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(tarea);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
};

export const crearTarea = async (req, res) => {
    const { nombre, descripcion, inicio_tarea, fin_tarea, estado, id_objetivo } = req.body;
    try {
        const tarea = await Tarea.crearTarea({nombre, descripcion, inicio_tarea, fin_tarea, estado, id_objetivo});
        res.status(201).json(tarea);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
};

export const actualizarTarea = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, inicio_tarea, fin_tarea, estado, id_objetivo } = req.body;
    try {
        let tarea = await Tarea.actualizarTarea(id, {nombre, descripcion, inicio_tarea, fin_tarea, estado, id_objetivo});
        if (tarea.affectedRows === 0) {
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
        let tarea = await Tarea.eliminarTareas(id);
        if (tarea.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
};
