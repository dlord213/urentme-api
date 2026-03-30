/*
  Warnings:

  - You are about to drop the column `tenantId` on the `maintenance_requests` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `lease_documents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "maintenance_requests" DROP CONSTRAINT "maintenance_requests_tenantId_fkey";

-- AlterTable
ALTER TABLE "lease_documents" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "maintenance_requests" DROP COLUMN "tenantId";
