import {Categoria} from "../model/CategoriaModel.js";

export const crearCategoria = async (req, res) => {
    const { nombre, color, icono } = req.body;
    try {
        const result = await Categoria.crearCategoria(nombre, color, icono);
        res.status(201).json({ id: result.insertId, nombre, color, icono });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la Categoria' });
    }
};

export const obtenerCategoria = async (req, res) => {
    try {
        const results = await Categoria.obtenerCategorias();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las Categoria' });
    }
};

export const obtenerCategoriaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Categoria.obtenerCategoriaPorId(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Categoria no encontrada' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la Categoria' });
    }
};

export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, color, icono } = req.body;
    try {
        const result = await Categoria.actualizarCategoria(id, nombre, color, icono);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoria no encontrada' });
        }
        res.status(200).json({ message: 'Categoria actualizada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la categoria' });
    }
};

export const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Categoria.eliminarCategoria(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoria no encontrada' });
        }
        res.status(200).json({ message: 'Categoria eliminada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la Categoria' });
    }
};

