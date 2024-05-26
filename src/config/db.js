const { PrismaClient: schema1 } = require('../../prisma/beresorder');

const beresorder = new schema1();

module.exports = {
    beresorder,
};

// npx prisma generate --schema=prisma/schema1.prisma
// npx prisma db pull --schema=prisma/schema1.prisma
// npx prisma db push --schema=prisma/schema1.prisma
