import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comment } from '@prisma/client';
import { CommentCreateInput } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  //* CREATE *//

  // Create comment
  async createComment(
    postId: string,
    userId: string,
    data: CommentCreateInput,
  ): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        ...data,
        postId: postId,
        userId: userId,
      },
    });
  }

  //* GET *//

  // Get comments
  async getComments(postId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        postId: postId,
      },
    });
  }

  //* DELETE *//

  // Delete comment
  async deleteComment(
    postId: string,
    commentId: string,
    userId: string,
  ): Promise<Comment> {
    return this.prisma.comment.delete({
      where: {
        commentId: commentId,
        postId: postId,
        userId: userId,
      },
    });
  }
}
