import {Categoria} from "../model/CategoriaModel.js";

export const obtenerCategoria = async (req, res) => {
    try {
        const categorias = await Categoria.obtenerCategorias();
        res.status(200).json(categorias);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las Categoria' });
    }
};

export const obtenerCategoriaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.obtenerCategoriaPorId(id);
        if (!categoria) return res.status(404).json({ error: "Categoria no encontrada" });
        res.status(200).json(categoria);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la Categoria' });
    }
};

export const crearCategoria = async (req, res) => {
    const { nombre, color, icono } = req.body;
    try {
        const categoria = await Categoria.crearCategoria({nombre, color, icono});
        res.status(201).json(categoria);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el Objetivo' });
    }
};

export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, color, icono } = req.body;
    
        let categoria = await Categoria.obtenerCategoriaPorId(id);
        if (!categoria) return res.status(404).json({ error: "Categoria no encontrada" });

        categoria = await Categoria.actualizarCategoria(id, {nombre, color, icono});
        res.status(200).json({ message: 'Categoria actualizada' });
   
};

export const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        let categoria = await Categoria.obtenerCategoriaPorId(id);
        if (!categoria) return res.status(404).json({ error: "Categoria no encontrada" });
        
        categoria = await Categoria.eliminarCategoria(id);
        res.status(200).json({ message: 'Categoria eliminada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la Categoria' });
    }
};

