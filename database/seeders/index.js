const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({});
const user_seeder = require("./user.seeder");

const print_message = (text) =>
    console.log("\x1b[32m", "✔️\t" + text, "\x1b[0m");

const seeders = [{ user_seeder }];
prisma
    .$connect()
    .then(() => {
        seeders.forEach(async (seed) => {
            let seed_title = Object.keys(seed)[0];
            console.log("       "+seed_title + " running");
            await seed[seed_title](prisma);
            print_message(seed_title + " completed");
        });
    })
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
