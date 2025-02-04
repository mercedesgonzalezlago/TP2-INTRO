import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Tarea = {
    obtenerTareas: () => prisma.tarea.findMany(),
    obtenerTareaPorId: (id) => prisma.tarea.findUnique({ where: { id: Number(id) } }),
    crearTarea: (data) => prisma.tarea.create({ data }),
    actualizarTarea: (id, data) => prisma.tarea.update({ where: { id: Number(id) }, data }),
    eliminarTareas: (id) => prisma.tarea.delete({ where: { id: Number(id) } }),
};