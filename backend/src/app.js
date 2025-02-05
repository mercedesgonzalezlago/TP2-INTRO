import express from 'express';
import bodyParser from 'body-parser';
import personaRoutes from './routes/PersonaRoutes.js';
import categoriaRoutes from "./routes/CategoriaRoutes.js";
import objetivosRoutes from "./routes/ObjetivosRoutes.js";
import tareaRoutes from "./routes/TareaRoutes.js";
import cors from 'cors';

const app = express();
app.use(cors());

app.use(bodyParser.json());

// Usar las rutas definidas
app.use('/api/v1/personas', personaRoutes);
app.use('/api/v1/categorias', categoriaRoutes);
app.use('/api/v1/objetivos', objetivosRoutes);
app.use('/api/v1/tareas', tareaRoutes)

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
