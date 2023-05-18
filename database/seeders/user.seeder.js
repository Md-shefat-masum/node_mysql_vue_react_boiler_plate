const bcrypt = require("bcrypt");

module.exports = async (prisma) => {
    if (await prisma.User?.findMany()) {
        await prisma.User.deleteMany({});
    }
    if (await prisma.UserRole?.findMany()) {
        await prisma.UserRole.deleteMany({});
    }
    const password = await bcrypt.hash("12345678", 10);
    let users = [
        {
            email: "super_admin@ex.com",
            user_name: "super admin",
            password: password,
            role: {
                create: {
                    name: "super admin",
                },
            },
        },
        {
            email: "admin@ex.com",
            user_name: "admin",
            password: password,
            role: {
                create: {
                    name: "admin",
                },
            },
        },
        {
            email: "user@ex.com",
            user_name: "user",
            password: password,
            role: {
                create: {
                    name: "user",
                },
            },
        },
    ];

    users.forEach(async (data) => {
        await prisma.user.create({
            data,
        });
    });
};
