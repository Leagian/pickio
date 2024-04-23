import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from '../graphql/resolvers/bookmark.resolver';

@Module({
  providers: [BookmarkService, PrismaService, BookmarkResolver],
})
export class BookmarkModule {}
