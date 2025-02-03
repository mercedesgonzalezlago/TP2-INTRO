/*
  Warnings:

  - You are about to drop the column `fin` on the `Tarea` table. All the data in the column will be lost.
  - You are about to drop the column `inicio` on the `Tarea` table. All the data in the column will be lost.
  - Added the required column `fin_tarea` to the `Tarea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio_tarea` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tarea" DROP COLUMN "fin",
DROP COLUMN "inicio",
ADD COLUMN     "fin_tarea" TEXT NOT NULL,
ADD COLUMN     "inicio_tarea" TEXT NOT NULL;
