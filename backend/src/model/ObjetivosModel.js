import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const Objetivo = {
    obtenerObjetivos: () => prisma.objetivo.findMany(),
    obtenerObjetivoPorId: (id) => prisma.objetivo.findUnique({ where: { id: Number(id) } }),
    crearObjetivo: (data) => prisma.objetivo.create({ data }),
    actualizarObjetivo: (id, data) => prisma.objetivo.update({ where: { id: Number(id) }, data }),
    eliminarObjetivo: (id) => prisma.objetivo.delete({ where: { id: Number(id) } }),
};

