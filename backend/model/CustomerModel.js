import db from '../db.js';

const createTable = `
    CREATE TABLE IF NOT EXISTS customer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        fecha_creacion DATE NOT NULL
        );

`;

db.query(createTable, err => {
    if (err) {
        console.error('Error al crear la tabla customers: ', err);
    }
});

const CUSTOMER = 'customer';

const Customer = {
    create: (nombre, email) => {
        const query = 'INSERT INTO ' + CUSTOMER + ' (nombre, email, fecha_creacion) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [nombre, email, new Date()], (err, result) => {
                if (err) {
                    console.error('Error ejecutando la consulta:', err);
                    return reject(err);
                }
                resolve(result);
            });
        });
    },
    getAll: () => {
        const query = 'SELECT * FROM CUSTOMER';
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    },
    getById: (id) => {
        const query = 'SELECT * FROM CUSTOMER WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
    update: (id, name, email) => {
        const query = 'UPDATE CUSTOMER SET name = ?, email = ?  WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [name, email, id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
    delete: (id) => {
        const query = 'DELETE FROM CUSTOMER WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
};

export default Customer;
