import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const Categoria = {
    obtenerCategorias: () => prisma.categoria.findMany(),
    obtenerCategoriaPorId: (id) => prisma.categoria.findUnique({ where: { id: Number(id) } }),
    crearCategoria: (data) => prisma.categoria.create({ data }),
    actualizarCategoria: (id, data) => prisma.categoria.update({ where: { id: Number(id) }, data }),
    eliminarCategoria: (id) => prisma.categoria.delete({ where: { id: Number(id) } }),
};

