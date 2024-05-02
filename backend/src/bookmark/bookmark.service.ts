import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Bookmark } from '@prisma/client';
import { BookmarkCreateInput } from './dto/bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  //* CREATE *//

  // Create bookmark
  createBookmark(data: BookmarkCreateInput): Promise<Bookmark> {
    return this.prisma.bookmark.create({
      data,
    });
  }

  //* GET *//

  // Get bookmarks
  getBookmarks(userId: string) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  //* DELETE *//

  // Delete bookmark
  deleteBookmark(bookmarkId: string) {
    return this.prisma.bookmark.delete({
      where: {
        bookmarkId,
      },
    });
  }
}
