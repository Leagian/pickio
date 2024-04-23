import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CommentService } from './comment.service';
import { CommentResolver } from '../graphql/resolvers/comment.resolver';

@Module({
  providers: [CommentService, PrismaService, CommentResolver],
})
export class CommentModule {}
