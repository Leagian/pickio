import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Créer 20 utilisateurs
  for (let i = 0; i < 20; i++) {
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        profilePicture: faker.image.avatar(),
        bio: faker.lorem.sentence(),
        interests: faker.hacker.verb(),
      },
    });
  }

  // Créer 30 posts partagés entre les utilisateurs
  const users = await prisma.user.findMany();
  for (let i = 0; i < 30; i++) {
    const user = users[i % users.length]; // Sélectionner un utilisateur de manière cyclique
    await prisma.post.create({
      data: {
        userId: user.userId,
        content: faker.lorem.paragraph().substring(0, 300),
        address: faker.location.city(),
        location: {
          type: 'Point',
          coordinates: [faker.location.longitude(), faker.location.latitude()],
        },
        images: [faker.image.urlLoremFlickr({ category: 'food' })],
        tags: [faker.hacker.noun(), faker.hacker.noun()],
      },
    });
  }

  // Créer des relations de suivi entre les utilisateurs de manière aléatoire
  for (let i = 0; i < users.length; i++) {
    const follower = users[i];
    const following = users[Math.floor(Math.random() * users.length)]; // Suivre un utilisateur aléatoire

    const existingFollow = await prisma.userFollows.findUnique({
      where: {
        followerId_followingId: {
          followerId: follower.userId,
          followingId: following.userId,
        },
      },
    });

    if (!existingFollow) {
      await prisma.userFollows.create({
        data: {
          followerId: follower.userId,
          followingId: following.userId,
        },
      });
    }
  }

  // Créer un nombre variable de commentaires, likes et bookmarks pour chaque utilisateur
  const posts = await prisma.post.findMany();
  for (const user of users) {
    const userPosts = posts.filter((post) => post.userId === user.userId);
    for (let i = 0; i < userPosts.length; i++) {
      // Créer un nombre aléatoire de commentaires pour chaque post de l'utilisateur
      const numComments = Math.floor(Math.random() * 10); // Générer un nombre aléatoire entre 0 et 10
      for (let j = 0; j < numComments; j++) {
        await prisma.comment.create({
          data: {
            postId: userPosts[i].postId,
            userId: user.userId,
            content: faker.lorem.sentence(),
          },
        });
      }

      // Créer un nombre aléatoire de likes pour chaque post de l'utilisateur
      const numLikes = Math.floor(Math.random() * 10); // Générer un nombre aléatoire entre 0 et 10
      for (let j = 0; j < numLikes; j++) {
        await prisma.like.create({
          data: {
            postId: userPosts[i].postId,
            userId: user.userId,
          },
        });
      }

      // Créer un nombre aléatoire de bookmarks pour chaque post de l'utilisateur
      const numBookmarks = Math.floor(Math.random() * 10); // Générer un nombre aléatoire entre 0 et 10
      for (let j = 0; j < numBookmarks; j++) {
        await prisma.bookmark.create({
          data: {
            postId: userPosts[i].postId,
            userId: user.userId,
          },
        });
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
