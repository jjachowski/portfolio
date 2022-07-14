/*
  Warnings:

  - Added the required column `title` to the `blogposts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogposts" ADD COLUMN     "title" TEXT NOT NULL;
