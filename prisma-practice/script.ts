import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

async function mainf() {
    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: { // ctrl+space for autopopulate
            name: "tump",
            age: 23,
            email: "tumpa@fake.com",
            userPreference: {
                create: {
                    emailUpdates: true,
                }
            }
        },
        // include :{
        //     userPreference: true,
        // },
        select: {
            name: true,
            userPreference: true,
        }
    });

    console.log(user);
}

mainf()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })


