import Categoria from "../model/CategoriaModel.js";

export const crearCategoria = async (req, res) => {
    const { titulo, descripcion, customer_id, categoria_id } = req.body;
    try {
        const result = await Categoria.create(titulo, descripcion, customer_id, categoria_id);
        res.status(201).json({ id: result.insertId, nombre, email });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

export const obtenerCategoria = async (req, res) => {
    try {
        const results = await Categoria.getAll();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

export const obtenerCategoriaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Categoria.getById(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await Categoria.update(id, name, email);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente actualizado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

export const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Categoria.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
