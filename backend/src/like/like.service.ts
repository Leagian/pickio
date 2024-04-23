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

  // Get likes by post ID
  async getLikesByPostId(postId: string): Promise<Like[]> {
    return this.prisma.like.findMany({
      where: {
        postId,
      },
    });
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
