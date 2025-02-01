const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const port = 8000;
const prisma = new PrismaClient();

var cors = require('cors');
app.use(cors())

app.use(express.json());

// CATEGORIAS
app.get("/api/v1/categorias", async (req, res) => {
  const categorias = await prisma.categorias.findMany();
  res.json(categorias);
});

app.get("/api/v1/categorias/:id", async (req, res) => {
  const categoria = await prisma.categorias.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (categoria === null) {
    res.sendStatus(404);
    return;
  }
  res.json(categoria);
});

app.post("/api/v1/categorias", async (req, res) => {
  const categoria = await prisma.categorias.create({
    data: {
      nombre: req.body.nombre,
      color: req.body.color,
      icono: req.body.icono,
    },
  });
  res.status(201).send(categoria);
});

app.delete("/api/v1/categorias/:id", async (req, res) => {
  const categoria = await prisma.categorias.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (categoria === null) {
    res.sendStatus(404);
    return;
  }

  await prisma.categorias.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.send(categoria);
});

app.put("/api/v1/categorias/:id", async (req, res) => {
  let categoria = await prisma.categorias.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (categoria === null) {
    res.sendStatus(404);
    return;
  }

  categoria = await prisma.categorias.update({
    where: {
      id: categoria.id,
    },
    data: {
      nombre: req.body.nombre,
      color: req.body.color,
      icono: req.body.icono,
    },
  });

  res.send(categoria);
});


// OBJETIVOS
app.get("/api/v1/objetivos", async (req, res) => {
  const objetivos = await prisma.objetivos.findMany();
  res.json(objetivos);
});

app.get("/api/v1/objetivos/:id", async (req, res) => {
  const objetivo = await prisma.objetivos.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (objetivo === null) {
    res.sendStatus(404);
    return;
  }
  res.json(objetivo);
});

app.post("/api/v1/objetivos", async (req, res) => {
  const objetivo = await prisma.objetivos.create({
    data: {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      categoria_id: req.body.categoria_id,
      fecha_inicio: req.body.fecha_inicio,
      fecha_fin: req.body.fecha_fin,
      usuario_id: req.body.usuario_id,
    },
  });
  res.status(201).send(objetivo);
});

app.delete("/api/v1/objetivos/:id", async (req, res) => {
  const objetivo = await prisma.objetivos.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (objetivo === null) {
    res.sendStatus(404);
    return;
  }

  await prisma.objetivos.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.send(objetivo);
});

app.put("/api/v1/objetivos/:id", async (req, res) => {
  let objetivo = await prisma.objetivos.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (objetivo === null) {
    res.sendStatus(404);
    return;
  }

  objetivo = await prisma.objetivos.update({
    where: {
      id: objetivo.id,
    },
    data: {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      categoria_id: req.body.categoria_id,
      fecha_inicio: req.body.fecha_inicio,
      fecha_fin: req.body.fecha_fin,
      usuario_id: req.body.usuario_id,
    },
  });

  res.send(objetivo);
});
//

app.listen(port, () => {
  console.log(`Objetivos app listening on port ${port}`);
});
