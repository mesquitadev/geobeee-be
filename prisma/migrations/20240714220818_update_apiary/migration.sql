/*
  Warnings:

  - Added the required column `name` to the `Apiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Meliponary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Apiary" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Meliponary" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "especieAbelha" DROP NOT NULL;
