import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post } from '@prisma/client';
import { PostCreateInput, PostUpdateInput } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  //* CREATE *//

  // Create post
  async createPost(data: PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  //* GET *//

  // Get posts
  async getPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  // Get post by ID
  async getPostById(postId: string): Promise<Post | null> {
    return this.prisma.post.findUnique({ where: { postId } });
  }

  //* UPDATE *//

  // Update post
  async updatePost(
    postId: string,
    data: PostUpdateInput,
  ): Promise<Post | null> {
    return this.prisma.post.update({ where: { postId }, data });
  }

  //* DELETE *//

  // Delete post
  async deletePost(postId: string): Promise<Post | null> {
    return this.prisma.post.delete({ where: { postId } });
  }
}
