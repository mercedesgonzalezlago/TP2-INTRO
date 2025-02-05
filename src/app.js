const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
    const { nombre, apellido, fecha_nacimiento, mail, telefono, username, password } = req.body;

    if (!nombre || !apellido || !fecha_nacimiento || !mail || !telefono || !username || !password) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                nombre,
                apellido,
                fecha_nacimiento: new Date(fecha_nacimiento),
                mail,
                telefono,
                username,
                password: hashedPassword
            }
        });

        res.status(201).json({ message: "Usuario registrado correctamente", user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error al registrar el usuario, verifique los datos" });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Faltan datos de usuario o contraseña" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        res.status(200).json({ message: "Inicio de sesión exitoso", user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error al iniciar sesión" });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


