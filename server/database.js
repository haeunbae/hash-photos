// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient({});

// module.exports = prisma;

const prismaModule = require("@prisma/client");

const PrismaClient = prismaModule.PrismaClient;

const prisma = new PrismaClient();

module.exports = prisma;
