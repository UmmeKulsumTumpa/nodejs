import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

async function mainf() {
    const users = await prisma.user.findMany();
    console.log(users);
}

mainf()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })


