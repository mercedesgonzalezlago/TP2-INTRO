import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Persona = {
    obtenerPersonas: () => prisma.persona.findMany(),
    obtenerPersonaPorId: (id) => prisma.persona.findUnique({ where: { id: Number(id) } }),
    crearPersona: (data) => prisma.persona.create({ data }),
    actualizarPersona: (id, data) => prisma.persona.update({ where: { id: Number(id) }, data }),
    eliminarPersona: (id) => prisma.persona.delete({ where: { id: Number(id) } }),
};
