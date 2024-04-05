import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Créer des utilisateurs
  const userAlice = await prisma.user.create({
    data: {
      username: 'Alice',
      email: 'alice@example.com',
      password: 'securepassword',
    },
  });
  const userBob = await prisma.user.create({
    data: {
      username: 'Bob',
      email: 'bob@example.com',
      password: 'securepassword',
    },
  });

  return [userAlice.userId, userBob.userId];
}

async function main() {
  await seed();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
