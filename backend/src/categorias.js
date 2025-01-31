const { PrismaClient } = require('@prisma/client') 
const express = require('express')
const app = express()
const port = 3000
const prisma = new PrismaClient()

app.use(express.json())

app.get('/api/v1/categorias', async (req, res) => {
  const categorias = await prisma.categoria.findMany()
  res.json(categorias)
})

app.get('/api/v1/categorias/:id', async (req, res) =>{
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (categoria === null){
    res.sendStatus(404)
    return
  }
  res.json(categoria)
})

app.post('/api/v1/categorias', async (req, res) => {
  const categoria = await prisma.categoria.create({
    data: {
      nombre: req.body.nombre,
      color: req.body.color,
      icono: req.body.icono
    }
  })
  res.status(201).send(categoria)
})

app.delete('/api/v1/categorias/:id', async (req, res) => {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })

  if (categoria === null)  {
    res.sendStatus(404)
    return
  }

  await prisma.categoria.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })

  res.send(categoria)
})

app.put('/api/v1/categorias/:id', async (req, res) => {
  let categoria = await prisma.categoria.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })

  if (categoria === null) {
    res.sendStatus(404)
    return
  }

  categoria = await prisma.categoria.update({
    where: {
      id: categoria.id
    },
    data: {
      nombre: req.body.nombre,
      color: req.body.color,
      icono: req.body.icono
    }
  })

  res.send(categoria)
})

app.listen(port, () => {
  console.log(`Objetivos app listening on port ${port}`)
})