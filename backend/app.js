import express from 'express';
import bodyParser from 'body-parser';
import personaRoutes from './routes/PersonaRoutes.js';

const app = express();

app.use(bodyParser.json());

// Usar las rutas definidas
app.use('/persona', personaRoutes);
/*
app.use('/categoria', categoriaRoutes);
app.use('/objetivo', objetivosRoutes);
app.use('/tarea', tareaRoutes)


 */

// Configurar el puerto de la aplicación
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
