/*
  Warnings:

  - Changed the type of `businessType` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "businessType",
ADD COLUMN     "businessType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "BusinessType";
