-- DropForeignKey
ALTER TABLE "Categoria" DROP CONSTRAINT "Categoria_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Objetivo" DROP CONSTRAINT "Objetivo_categoria_id_fkey";

-- DropForeignKey
ALTER TABLE "Objetivo" DROP CONSTRAINT "Objetivo_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_id_objetivo_fkey";

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objetivo" ADD CONSTRAINT "Objetivo_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objetivo" ADD CONSTRAINT "Objetivo_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_objetivo_fkey" FOREIGN KEY ("id_objetivo") REFERENCES "Objetivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
