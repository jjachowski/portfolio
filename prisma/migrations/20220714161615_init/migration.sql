-- CreateTable
CREATE TABLE "blogposts" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "blogposts_pkey" PRIMARY KEY ("id")
);
