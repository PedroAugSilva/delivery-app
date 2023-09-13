import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.role.create({
    data: {
      role: "entregador",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
