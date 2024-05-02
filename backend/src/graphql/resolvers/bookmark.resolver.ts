import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BookmarkService } from '../../bookmark/bookmark.service';
import { Bookmark } from '../models/bookmark.model';
import { BookmarkCreateInput } from '../../bookmark/dto/bookmark.dto';

@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  //* CREATE *//

  // Create bookmark
  @Mutation(() => Bookmark)
  async createBookmark(@Args('data') data: BookmarkCreateInput) {
    return this.bookmarkService.createBookmark(data);
  }

  //* GET *//

  // Get bookmarks
  @Query(() => [Bookmark], { name: 'bookmarks' })
  async getBookmarks(@Args('userId') userId: string) {
    return this.bookmarkService.getBookmarks(userId);
  }

  //* DELETE *//

  // Delete bookmark
  @Mutation(() => Bookmark, { name: 'deleteBookmark' })
  async deleteBookmark(@Args('bookmarkId') bookmarkId: string) {
    return this.bookmarkService.deleteBookmark(bookmarkId);
  }
}
