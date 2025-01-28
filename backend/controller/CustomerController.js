import Customer from '../model/CustomerModel.js';

export const createCustomer = async (req, res) => {
    const { nombre, email } = req.body;
    try {
        const result = await Customer.create(nombre, email);
        res.status(201).json({ id: result.insertId, nombre, email });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

export const getAllCustomers = async (req, res) => {
    try {
        const results = await Customer.getAll();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

export const getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Customer.getById(id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

export const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await Customer.update(id, name, email);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente actualizado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

export const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Customer.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
