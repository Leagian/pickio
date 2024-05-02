import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { User, UserFollows } from '@prisma/client';
import { UserCreateInput, UserUpdateInput } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //* CREATE *//

  // Create a user
  async createUser(data: UserCreateInput): Promise<User> {
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

  //* GET *//

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
  async getFollowers(userId: string): Promise<User[]> {
    const userFollows = await this.prisma.userFollows.findMany({
      where: { followingId: userId },
      include: { follower: true },
    });
    return userFollows.map((follow) => follow.follower);
  }

  // Get followings
  async getFollowings(userId: string): Promise<User[]> {
    const userFollows = await this.prisma.userFollows.findMany({
      where: { followerId: userId },
      include: { following: true },
    });
    return userFollows.map((follow) => follow.following);
  }

  // Get followers count
  async getFollowersCount(userId: string): Promise<number> {
    return this.prisma.userFollows.count({
      where: { followingId: userId },
    });
  }

  // Get followings count
  async getFollowingsCount(userId: string): Promise<number> {
    return this.prisma.userFollows.count({
      where: { followerId: userId },
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

  //* UPDATE *//

  // Update user
  async updateUser(
    userId: string,
    userUpdateInput: UserUpdateInput,
  ): Promise<User> {
    let data = { ...userUpdateInput };

    if (userUpdateInput.password) {
      const hashedPassword = await bcrypt.hash(userUpdateInput.password, 10);
      data = { ...data, password: hashedPassword };
    }

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

  //* DELETE *//

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
