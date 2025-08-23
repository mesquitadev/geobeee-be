/*
  Warnings:

  - You are about to drop the column `businessType` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `users` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Apiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Apiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Meliponary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'APICULTOR', 'MELIPONICULTOR');

-- DropIndex
DROP INDEX "users_latitude_key";

-- DropIndex
DROP INDEX "users_longitude_key";

-- AlterTable
ALTER TABLE "Apiary" ADD COLUMN     "latitude" TEXT NOT NULL,
ADD COLUMN     "longitude" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Meliponary" ADD COLUMN     "latitude" TEXT NOT NULL,
ADD COLUMN     "longitude" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "businessType",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "role" "Role" NOT NULL;
