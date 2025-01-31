import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "dop",
    password: "root",
    port: 5432, // Puerto por defecto de PostgreSQL
});

pool.connect()
    .then(() => console.log("Conectado a PostgreSQL"))
    .catch(err => console.error("Error de conexión", err));

export default pool;
