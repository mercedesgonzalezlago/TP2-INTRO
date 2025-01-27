const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

let tareas = [{
    id: 1,
    nombre: "Final",
    fecha_inicio: "27/1/2025",
    fecha_fin: "2/2/2025"
}]

app.get('/', (req, res) => {
    res.send('Mis tareas')
})

app.get('/api/v1/tareas', (req, res) => {
    res.json(tareas)
})

app.get('/api/v1/tareas/:id', (req, res) => {
    const tarea = tareas.find((element) => element.id == req.params.id)

    if (user === undefined) {
        res.sendStatus(404)
        return
    }
    res.json(tarea)
})

app.post('/api/v1/tareas', (req, res) => {
    const tarea = {
        id: tareas.length + 1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin
    }
    tareas.push(tarea)
    res.status(201).send(tarea)
})

app.delete('/api/v1/tareas/:id', (req, res) => {
    const tarea = tareas.find((element) => element.id == req.params.id)

    if (tarea === undefined) {
        res.sendStatus(404)
        return
    }

    tareas = tareas.filter((element) => element.id !== req.params.id)
    res.send(tarea)
})

app.put('/api/v1/tareas/:id', (req, res) => {
    let tarea_id = tareas.findIndex((element) => element.id == req.params.id)

    if (tarea_id === -1) {
        res.sendStatus(404)
        return
    }

    tareas[tarea_id].nombre = req.body.nombre ?? tareas[tarea_id].nombre
    tareas[tarea_id].descripcion = req.body.descripcion ?? tareas[tarea_id].descripcion
    tareas[tarea_id].fecha_inicio = req.body.fecha_inicio ?? tareas[tarea_id].fecha_inicio
    tareas[tarea_id].fecha_fin = req.body.fecha_fin ?? tareas[tarea_id].fecha_fin

    res.send(tareas[tarea_id])
})

app.listen(port, () => {
    console.log(`ejemplo port ${port}`)
})
