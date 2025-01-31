import db from '../db.js';

const createTable = `
    CREATE TABLE IF NOT EXISTS objetivo (
        id SERIAL PRIMARY KEY, 
        titulo VARCHAR(255) NOT NULL,
        descripcion TEXT NOT NULL,
        estado VARCHAR(255) NOT NULL,
        fecha_creacion DATE NOT NULL,
        fecha_fin DATE NOT NULL,
        customer_id INT REFERENCES customer(id) ON DELETE CASCADE, 
        categoria_id INT REFERENCES categoria(id) ON DELETE SET NULL
        );
`;

db.query(createTable, err => {
    if (err) {
        console.error('Error al crear la tabla objetivo: ', err);
    } else {
        console.log('Tabla objetivo creada correctamente');
    }
});


const Objetivo = {
    create: (titulo, descripcion, customer_id, categoria_id) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO objetivo (titulo, descripcion, estado, fecha_creacion, fecha_fin, customer_id, categoria_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            db.query(query, [titulo, descripcion, estado, new Date(), fecha_fin, customer_id, categoria_id], (err, result) => {
                if (err) {
                    console.error('Error ejecutando la consulta:', err);
                    return reject(err);
                }
                resolve(result);
            });
        });
    },
    getAll: () => {
        const query = 'SELECT * FROM objetivo';
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    },
    getById: (id) => {
        const query = 'SELECT * FROM objetivo WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
    delete: (id) => {
        const query = 'DELETE FROM objetivo WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
};

export default Objetivo;
