// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  const alice = await prisma.user.create({
    data: {
      username: 'Alice',
      email: 'alice@example.com',
      password: 'hashedpassword',
      profilePicture: 'https://example.com/path/to/alice/profile/pic',
      bio: 'Hello, I am Alice',
      interests: 'Prisma, GraphQL',
    },
  });

  const bob = await prisma.user.create({
    data: {
      username: 'Bob',
      email: 'bob@example.com',
      password: 'hashedpasswordbob',
      profilePicture: 'https://example.com/path/to/bob/profile/pic',
      bio: 'Hello, I am Bob',
      interests: 'NestJS, TypeScript',
    },
  });

  // Create a post for Alice
  await prisma.post.create({
    data: {
      userId: alice.userId,
      content: 'First post!',
      address: 'Paris, France',
      location: { type: 'Point', coordinates: [2.3522, 48.8566] },
      images: ['https://example.com/path/to/image.jpg'],
      tags: ['Prisma', 'GraphQL'],
    },
  });

  // Create a post for Bob
  await prisma.post.create({
    data: {
      userId: bob.userId,
      content: 'Hello, World!',
      address: 'Berlin, Germany',
      location: { type: 'Point', coordinates: [13.405, 52.52] },
      images: ['https://example.com/path/to/image.jpg'],
      tags: ['NestJS', 'TypeScript'],
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
