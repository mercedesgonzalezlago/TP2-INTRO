
const createTable = `
    CREATE TABLE IF NOT EXISTS tarea (
        id SERIAL PRIMARY KEY,
        descripcion TEXT NOT NULL,
        fecha_limite DATE,
        estado VARCHAR(20) NOT NULL,
        objetivo_id INT REFERENCES objetivo(id) ON DELETE CASCADE
        );
`;
