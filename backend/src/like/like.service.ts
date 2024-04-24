import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Like } from '@prisma/client';
import { LikeCreateInput } from '../graphql/models/like.model';

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}

  //* CREATE *//

  // Create like
  async createLike(data: LikeCreateInput): Promise<Like> {
    return this.prisma.like.create({ data });
  }

  //* GET *//

  // Get likes and their count by post ID
  async getLikesAndCountByPostId(
    postId: string,
  ): Promise<{ likes: Like[]; count: number }> {
    const likes = await this.prisma.like.findMany({
      where: {
        postId,
      },
    });

    const count = await this.prisma.like.count({
      where: {
        postId,
      },
    });

    return { likes, count };
  }

  //* DELETE *//

  // Delete like
  async deleteLike(postId: string, likeId: string): Promise<Like> {
    return this.prisma.like.delete({
      where: {
        likeId: likeId,
        postId,
      },
    });
  }
}
