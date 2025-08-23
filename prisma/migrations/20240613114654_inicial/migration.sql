/*
  Warnings:

  - You are about to drop the column `name` on the `Meliponary` table. All the data in the column will be lost.
  - You are about to drop the column `apiaryId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `meliponaryId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[latitude]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[longitude]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `acessoVeiculos` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disponibilidadeAgua` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distanciaMinimaConstrucoes` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distanciaSeguraContaminacao` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distanciaSeguraLavouras` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `especieAbelha` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fontesNectarPolen` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outrosMeliponariosRaio1km` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protecaoVentosFortes` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidadeColmeias` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sombreamentoNatural` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoInstalacao` to the `Meliponary` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_apiaryId_meliponaryId_key";

-- AlterTable
ALTER TABLE "Meliponary" DROP COLUMN "name",
ADD COLUMN     "acessoVeiculos" BOOLEAN NOT NULL,
ADD COLUMN     "disponibilidadeAgua" BOOLEAN NOT NULL,
ADD COLUMN     "distanciaMinimaConstrucoes" BOOLEAN NOT NULL,
ADD COLUMN     "distanciaSeguraContaminacao" BOOLEAN NOT NULL,
ADD COLUMN     "distanciaSeguraLavouras" BOOLEAN NOT NULL,
ADD COLUMN     "especieAbelha" TEXT NOT NULL,
ADD COLUMN     "fontesNectarPolen" BOOLEAN NOT NULL,
ADD COLUMN     "outrosMeliponariosRaio1km" BOOLEAN NOT NULL,
ADD COLUMN     "protecaoVentosFortes" BOOLEAN NOT NULL,
ADD COLUMN     "qtdColmeiasOutrosMeliponarios" TEXT,
ADD COLUMN     "quantidadeColmeias" TEXT NOT NULL,
ADD COLUMN     "sombreamentoNatural" BOOLEAN NOT NULL,
ADD COLUMN     "tipoInstalacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "apiaryId",
DROP COLUMN "meliponaryId";

-- CreateIndex
CREATE UNIQUE INDEX "users_latitude_key" ON "users"("latitude");

-- CreateIndex
CREATE UNIQUE INDEX "users_longitude_key" ON "users"("longitude");
