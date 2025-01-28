const { PrismaClient } = require('@prisma/client')
const express = require("express")
const cors = require('cors')
const app = express()
const port = 3000
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

let tareas = []

app.get('/', (req, res) => {
    res.send('Mis tareas')
})

app.get('/api/v1/tareas', async (req, res) => {
    const tareas = await prisma.tarea.findMany()
    res.json(tareas)
})

app.get('/api/v1/tareas/:id', async (req, res) => {
    const tarea = await prisma.tarea.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (tarea === null) {
        res.sendStatus(404)
        return
    }

    res.json(tarea)
})

app.post('/api/v1/tareas', async (req, res) => {
    const tarea = await prisma.tarea.create({
        data: {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            inicio: req.body.inicio_tarea,
            fin: req.body.fin_tarea,
            id_objetivo: req.body.id_objetivo
        }
    })
    res.status(201).send(tarea)
})

app.delete('/api/v1/tareas/:id', async (req, res) => {
    const tarea = await prisma.tarea.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (tarea === null) {
        res,sendStatus(404)
        return
    }

    await prisma.tarea.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })

    res.send(tarea)
})

app.put('/api/v1/tareas/:id', async (req, res) => {
    const tarea = await prisma.tarea.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (tarea === null) {
        res,sendStatus(404)
        return
    }

    await prisma.tarea.update({
        where: {
            id: tarea.id
        },
        data : {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            inicio: req.body.inicio_tarea,
            fin: req.body.fin_tarea
        }
    })

    res.send(tarea)
})

app.listen(port, () => {
    console.log(`ejemplo port ${port}`)
})
