import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoutes.js';

const app = express();
app.use(bodyParser.json());

// Usar las rutas definidas
app.use('/customers', customerRoutes);

// Configurar el puerto de la aplicación
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
