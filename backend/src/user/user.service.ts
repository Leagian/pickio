import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaClientPostgres } from '../../prismaPostgres/generated/clientPostgres';
import { PrismaClient as PrismaClientMongo } from '../../prismaMongo/generated/clientMongo';

@Injectable()
export class UserService {
  private prismaPostgres: PrismaClientPostgres;
  private prismaMongo: PrismaClientMongo;

  constructor() {
    this.prismaPostgres = new PrismaClientPostgres();
    this.prismaMongo = new PrismaClientMongo();
    console.log(this.prismaPostgres.$connect());
  }

  async getUsers() {
    return await this.prismaPostgres.user.findMany();
  }

  async getUserById(userId: string) {
    return await this.prismaPostgres.user.findUnique({
      where: { user_id: userId },
    });
  }

  async createDummyUsers() {
    const dummyUsers = [
      { username: 'user3', email: 'user3@example.com', password: 'password3' },
      { username: 'user4', email: 'user4@example.com', password: 'password4' },
    ];

    try {
      for (const user of dummyUsers) {
        console.log('Creating user:', user);
        await this.prismaPostgres.user.create({
          data: user,
        });
      }
      console.log('Users created successfully');
    } catch (error) {
      console.error(
        'Erreur lors de la création des utilisateurs fictifs:',
        error,
      );
      console.error('Error creating dummy users:', error.message);
      throw error;
    }
  }
}
