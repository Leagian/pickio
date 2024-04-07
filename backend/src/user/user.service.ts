import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Get users
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Get user by ID
  async getUserById(userId: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { userId } });
  }

  // Get Follows
  async getFollowers(userId: string) {
    return await this.prisma.userFollows.findMany({
      where: { followingId: userId },
    });
  }
}
