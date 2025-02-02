import {Tarea} from "../model/TareaModel.js";

export const crearTarea = async (req, res) => {
    const { titulo, descripcion, customer_id, categoria_id } = req.body;
    try {
        const result = await Tarea.crearTarea(titulo, descripcion, customer_id, categoria_id);
        res.status(201).json({ id: result.insertId, nombre, email });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

export const obtenerTarea = async (req, res) => {
    try {
        const results = await Tarea.obtenerTareas();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

export const obtenerTareaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Tarea.obtenerTareaPorId(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

export const actualizarTarea = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await Tarea.actualizarTarea(id, name, email);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente actualizado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

export const eliminarTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Tarea.eliminarTareas(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
