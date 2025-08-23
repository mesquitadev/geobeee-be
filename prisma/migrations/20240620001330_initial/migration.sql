-- DropForeignKey
ALTER TABLE "Apiary" DROP CONSTRAINT "Apiary_userId_fkey";

-- DropForeignKey
ALTER TABLE "Meliponary" DROP CONSTRAINT "Meliponary_userId_fkey";

-- DropIndex
DROP INDEX "Apiary_userId_key";

-- DropIndex
DROP INDEX "Meliponary_userId_key";
