import mysql from 'mysql2';

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dop',
    port: 3306,
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar con la base de datos: ', err);
        process.exit();
    }
    console.log('Conexión a MySQL exitosa');
});

export default db;
