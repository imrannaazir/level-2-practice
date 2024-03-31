import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    const allPost = await prisma.post.findMany();
    const result = await prisma.post.create({
      data: {
        title: "This is title 2",
        content: "This is content2",
        authorName: "Emon",
      },
    });
    // console.log(result);

    console.log(allPost);
  } catch (error) {
    console.log(error);
  }
};

main();
