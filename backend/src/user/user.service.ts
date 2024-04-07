import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, UserFollows } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from '../graphql/models/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Create a user
  async createUser(data: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // Create a Follow user
  async followUser(
    followerId: string,
    followingId: string,
  ): Promise<UserFollows> {
    return this.prisma.userFollows.create({
      data: {
        followerId,
        followingId,
      },
    });
  }

  // Get users
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Get user by username
  async getUserByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  // Get user by ID
  async getUserById(userId: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { userId } });
  }

  // Get followers
  async getFollowers(userId: string) {
    return await this.prisma.userFollows.findMany({
      where: { followingId: userId },
    });
  }

  // Search users
  async searchUsers(query: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        username: {
          contains: query,
          mode: 'insensitive', // This makes the search case-insensitive
        },
      },
    });
  }

  // Update user
  async updateUser(userId: string, data: UpdateUserInput): Promise<User> {
    // TODO: Implement password hashing
    // const hashedPassword = await bcrypt.hash(data.password, 10);
    // data.password = hashedPassword;
    return this.prisma.user.update({
      where: { userId },
      data,
    });
  }

  // Update password
  async updatePassword(userId: string, password: string): Promise<User> {
    return this.prisma.user.update({
      where: { userId },
      data: {
        password,
      },
    });
  }

  // Delete user
  async deleteUser(userId: string): Promise<User> {
    return this.prisma.user.delete({
      where: { userId },
    });
  }

  // Unfollow user
  async unfollowUser(
    followerId: string,
    followingId: string,
  ): Promise<UserFollows> {
    return this.prisma.userFollows.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });
  }
}
