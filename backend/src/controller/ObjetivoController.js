import {Objetivo} from "../model/ObjetivosModel.js";

export const obtenerObjetivos = async (req, res) => {
    try {
        const objetivos = await Objetivo.obtenerObjetivos();
        res.status(200).json(objetivos);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

export const obtenerObjetivoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Objetivo.obtenerObjetivoPorId(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

export const crearObjetivo = async (req, res) => {
    const { titulo, descripcion, customer_id, categoria_id } = req.body;
    try {
        const result = await Objetivo.crearObjetivo(titulo, descripcion, customer_id, categoria_id);
        res.status(201).json({ id: result.insertId, nombre, email });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

export const actualizarObjetivo = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await Objetivo.actualizarObjetivo(id, name, email);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente actualizado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

export const eliminarObjetivo = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Objetivo.eliminarObjetivo(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
