import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Get users
  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getUserById(userId: string) {
    return await this.prisma.user.findUnique({
      where: { userId: userId },
    });
  }

  // Get Follows
  async getFollowers(userId: string) {
    return await this.prisma.userFollows.findMany({
      where: { followingId: userId },
    });
  }
}
