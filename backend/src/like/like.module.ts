import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LikeService } from './like.service';
import { LikeResolver } from '../graphql/resolvers/like.resolver';

@Module({
  providers: [LikeService, PrismaService, LikeResolver],
})
export class LikeModule {}
