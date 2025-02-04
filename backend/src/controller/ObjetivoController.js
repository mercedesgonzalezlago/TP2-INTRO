import {Objetivo} from "../model/ObjetivosModel.js";

export const obtenerObjetivos = async (req, res) => {
    try {
        const objetivos = await Objetivo.obtenerObjetivos();
        res.status(200).json(objetivos);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los Objetivos' });
    }
};

export const obtenerObjetivoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Objetivo.obtenerObjetivoPorId(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Objetivo no encontrado' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el Objetivo' });
    }
};

export const crearObjetivo = async (req, res) => {
    const { titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id } = req.body;
    try {
        const result = await Objetivo.crearObjetivo(titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id);
        res.status(201).json({ id: result.insertId, titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id});
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el Objetivo' });
    }
};

export const actualizarObjetivo = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id } = req.body;
    try {
        const result = await Objetivo.actualizarObjetivo(id, titulo, descripcion, categoria_id, fecha_inicio, fecha_fin, usuario_id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Objetivo no encontrado' });
        }
        res.status(200).json({ message: 'Objetivo actualizado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el Objetivo' });
    }
};

export const eliminarObjetivo = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Objetivo.eliminarObjetivo(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Objetivo no encontrado' });
        }
        res.status(200).json({ message: 'Objetivo eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el Objetivo' });
    }
};
