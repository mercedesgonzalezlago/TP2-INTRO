-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Pendiente';

-- CreateTable
CREATE TABLE "Objetivo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "fecha_inicio" TEXT NOT NULL,
    "fecha_fin" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "Objetivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_objetivo_fkey" FOREIGN KEY ("id_objetivo") REFERENCES "Objetivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
