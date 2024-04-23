import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BookmarkService } from '../../bookmark/bookmark.service';
import { Bookmark, BookmarkCreateInput } from '../models/bookmark.model';

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
  @Query(() => [Bookmark])
  async getBookmarks(@Args('userId') userId: string) {
    return this.bookmarkService.getBookmarks(userId);
  }

  //* DELETE *//

  // Delete bookmark
  @Mutation(() => Bookmark)
  async deleteBookmark(@Args('bookmarkId') bookmarkId: string) {
    return this.bookmarkService.deleteBookmark(bookmarkId);
  }
}
