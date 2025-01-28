-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "inicio" TEXT NOT NULL,
    "fin" TEXT NOT NULL,
    "id_objetivo" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);
