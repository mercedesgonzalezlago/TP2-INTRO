import db from '../db.js';

const createTable = `
    CREATE TABLE IF NOT EXISTS tarea (
        id SERIAL PRIMARY KEY,
        descripcion TEXT NOT NULL,
        fecha_limite DATE,
        estado VARCHAR(20) NOT NULL,
        objetivo_id INT REFERENCES objetivo(id) ON DELETE CASCADE
        );
`;

db.query(createTable, err => {
    if (err) {
        console.error('Error al crear la tabla objetivo: ', err);
    } else {
        console.log('Tabla objetivo creada correctamente');
    }
});

const Tarea = {
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

export default Tarea;
