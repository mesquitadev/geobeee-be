/*
  Warnings:

  - You are about to drop the `Business` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizQuestions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizResponses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[apiaryId,meliponaryId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `businessType` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('APIARY', 'MELIPONARY');

-- DropForeignKey
ALTER TABLE "Business" DROP CONSTRAINT "Business_userId_fkey";

-- DropForeignKey
ALTER TABLE "QuizResponses" DROP CONSTRAINT "QuizResponses_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "apiaryId" INTEGER,
ADD COLUMN     "businessType" "BusinessType" NOT NULL,
ADD COLUMN     "latitude" TEXT NOT NULL,
ADD COLUMN     "longitude" TEXT NOT NULL,
ADD COLUMN     "meliponaryId" INTEGER;

-- DropTable
DROP TABLE "Business";

-- DropTable
DROP TABLE "Quiz";

-- DropTable
DROP TABLE "QuizQuestions";

-- DropTable
DROP TABLE "QuizResponses";

-- CreateTable
CREATE TABLE "Apiary" (
    "id" SERIAL NOT NULL,
    "tipoInstalacao" TEXT NOT NULL,
    "tempoItinerante" TEXT,
    "quantidadeColmeias" TEXT NOT NULL,
    "outrosApiariosRaio3km" BOOLEAN NOT NULL,
    "qtdColmeiasOutrosApiarios" TEXT,
    "fontesNectarPolen" BOOLEAN NOT NULL,
    "disponibilidadeAgua" BOOLEAN NOT NULL,
    "sombreamentoNatural" BOOLEAN NOT NULL,
    "protecaoVentosFortes" BOOLEAN NOT NULL,
    "distanciaSeguraContaminacao" BOOLEAN NOT NULL,
    "distanciaMinimaConstrucoes" BOOLEAN NOT NULL,
    "distanciaSeguraLavouras" BOOLEAN NOT NULL,
    "acessoVeiculos" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Apiary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meliponary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Meliponary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Apiary_userId_key" ON "Apiary"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Meliponary_userId_key" ON "Meliponary"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_apiaryId_meliponaryId_key" ON "users"("apiaryId", "meliponaryId");

-- AddForeignKey
ALTER TABLE "Apiary" ADD CONSTRAINT "Apiary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meliponary" ADD CONSTRAINT "Meliponary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
