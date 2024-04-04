import { PrismaClient as PrismaClientMongo } from '../prismaMongo/generated/clientMongo';
import { PrismaClient as PrismaClientPostgres } from '../prisma/generated/clientPostgres';

const prismaMongo = new PrismaClientMongo();
const prismaPostgres = new PrismaClientPostgres();

async function seedPostgres() {
  // Créer des utilisateurs dans PostgreSQL et récupérer leurs user_id
  const userAlice = await prismaPostgres.user.create({
    data: {
      username: 'Alice',
      email: 'alice@example.com',
      password: 'securepassword',
    },
  });
  const userBob = await prismaPostgres.user.create({
    data: {
      username: 'Bob',
      email: 'bob@example.com',
      password: 'securepassword',
    },
  });

  return [userAlice.user_id, userBob.user_id];
}

async function seedMongo(userIds) {
  // Utiliser les userIds pour référencer les utilisateurs dans MongoDB
  await prismaMongo.post.create({
    data: {
      user_id: userIds[0], // Alice's posts
      content: "Alice's first reco post",
      address: '123 Main St',
      location: { type: 'Point', coordinates: [-73.856077, 40.848447] },
      images: [],
      tags: ['first', 'hello'],
      likes: [],
      shareCount: 0,
    },
  });

  await prismaMongo.comment.create({
    data: {
      postId: '<ID_DU_POST>', // Utiliser un postId valide ici
      user_id: userIds[1], // Bob commente
      content: 'Nice post, Alice!',
    },
  });

  // Plus d'opérations de seeding pour MongoDB...
}

async function main() {
  const userIds = await seedPostgres();
  await seedMongo(userIds);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaMongo.$disconnect();
    await prismaPostgres.$disconnect();
  });
