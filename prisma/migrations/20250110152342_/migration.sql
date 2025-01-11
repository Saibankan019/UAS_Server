/*
  Warnings:

  - You are about to drop the column `content` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `Completion` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Completion` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_UserCourses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `message` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Completion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_contentId_fkey";

-- DropForeignKey
ALTER TABLE "Completion" DROP CONSTRAINT "Completion_contentId_fkey";

-- DropForeignKey
ALTER TABLE "_UserCourses" DROP CONSTRAINT "_UserCourses_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserCourses" DROP CONSTRAINT "_UserCourses_B_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "content",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "teacherId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "contentId",
DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Completion" DROP COLUMN "contentId",
DROP COLUMN "createdAt",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "categoryId" INTEGER,
ADD COLUMN     "maxStudents" INTEGER,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "site" TEXT NOT NULL,
ADD COLUMN     "teacherId" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "username",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "profilePic" TEXT;

-- DropTable
DROP TABLE "_UserCourses";

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Completion" ADD CONSTRAINT "Completion_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
