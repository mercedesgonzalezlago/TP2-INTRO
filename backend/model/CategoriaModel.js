
const createTable = `
    CREATE TABLE IF NOT EXISTS categoria (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        descripcion TEXT
        );
`;
