const prismaModule = require("@prisma/client");

const PrismaClient = prismaModule.PrismaClient;

const prisma = new PrismaClient();

module.exports = prisma;
