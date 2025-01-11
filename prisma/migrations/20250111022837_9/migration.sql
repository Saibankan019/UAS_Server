-- CreateTable
CREATE TABLE "course_members" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "roles" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "course_user_idx" ON "course_members"("courseId", "userId");

-- AddForeignKey
ALTER TABLE "course_members" ADD CONSTRAINT "course_members_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_members" ADD CONSTRAINT "course_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
