/*
  Warnings:

  - You are about to drop the `Objetivo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_id_objetivo_fkey";

-- DropTable
DROP TABLE "Objetivo";
