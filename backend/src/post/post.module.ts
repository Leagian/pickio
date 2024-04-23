import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PostService } from './post.service';
import { PostResolver } from '../graphql/resolvers/post.resolver';

@Module({
  providers: [PostService, PrismaService, PostResolver],
})
export class PostModule {}
