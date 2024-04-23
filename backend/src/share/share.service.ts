import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Share } from '@prisma/client';
import { ShareCreateInput } from '../graphql/models/share.model';

@Injectable()
export class ShareService {
  constructor(private prisma: PrismaService) {}

  //* CREATE *//

  // Create Share
  async createShare(data: ShareCreateInput): Promise<Share> {
    return this.prisma.share.create({
      data,
    });
  }

  // Share post with followings
  async sharePostWithFollowings(
    userId: string,
    postId: string,
    followingIds: string[],
  ) {
    const shares = followingIds.map((followingId) => {
      return this.prisma.share.create({
        data: {
          userId: followingId,
          postId: postId,
        },
      });
    });

    return Promise.all(shares);
  }

  //* GET *//

  // Get shares by post ID
  async getSharedPosts(userId: string) {
    return this.prisma.share.findMany({
      where: {
        userId,
      },
    });
  }

  //* DELETE *//

  // Delete share
  async deleteShare(shareId: string) {
    return this.prisma.share.delete({
      where: {
        shareId: shareId,
      },
    });
  }
}
