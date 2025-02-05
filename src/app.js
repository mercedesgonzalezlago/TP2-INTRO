const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const prisma = new PrismaClient();
const port = 3000;
app.use(cors());
app.use(express.json());

const personasRouter = express.Router();

personasRouter.post("/register", async (req, res) => {
    const { nombre, apellido, fecha_nacimiento, email, telefono, usuario, contrasenia } = req.body;

    if (!nombre || !apellido || !fecha_nacimiento || !email || !telefono || !usuario || !contrasenia) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    try {
        const hashedPassword = await bcrypt.hash(contrasenia, 10);

        const persona = await prisma.persona.create({
            data: {
                nombre,
                apellido,
                fecha_nacimiento,
                email,
                telefono,
                usuario,
                contrasenia: hashedPassword,
                fecha_creacion_usuario: new Date()
            }
        });

        res.status(201).json({ message: "Usuario registrado correctamente", persona });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error al registrar el usuario, verifique los datos" });
    }
});

personasRouter.get("/", async (req, res) => {
    try {
        const personas = await prisma.persona.findMany();
        res.status(200).json(personas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las personas" });
    }
});

personasRouter.get("/login", async (req, res) => {
    const { usuario, contrasenia } = req.query; 

    if (!usuario || !contrasenia) {
        return res.status(400).json({ error: "Faltan datos de usuario o contraseña" });
    }

    try {
        const personas = await prisma.persona.findMany();

        const persona = personas.find(p => p.usuario === usuario);

        if (!persona) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const validPassword = persona.contrasenia === contrasenia;
        if (!validPassword) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        res.status(200).json({ message: "Inicio de sesión exitoso", persona });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
});

app.use("/api/v1/personas", personasRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
