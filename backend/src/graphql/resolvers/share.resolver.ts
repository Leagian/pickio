import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ShareService } from '../../share/share.service';
import { Share } from '../models/share.model';
import { ShareCreateInput } from '../../share/dto/share.dto';

@Resolver(() => Share)
export class ShareResolver {
  constructor(private shareService: ShareService) {}

  //* CREATE *//

  // Create Share
  @Mutation(() => Share)
  async createShare(@Args('data') data: ShareCreateInput) {
    return this.shareService.createShare(data);
  }

  // Share post with followings
  @Mutation(() => [Share], { name: 'sharePostWithFollowings' })
  async sharePostWithFollowings(
    @Args('userId') userId: string,
    @Args('postId') postId: string,
    @Args({ name: 'followingIds', type: () => [String] })
    followingIds: string[],
  ) {
    return this.shareService.sharePostWithFollowings(
      userId,
      postId,
      followingIds,
    );
  }

  //* GET *//

  // Get shared posts
  @Query(() => [Share], { name: 'getSharedPosts' })
  async getSharedPosts(@Args('userId') userId: string) {
    return this.shareService.getSharedPosts(userId);
  }

  //* DELETE *//

  // Delete share
  @Mutation(() => Share, { name: 'deleteShare' })
  async deleteShare(@Args('shareId') shareId: string) {
    return this.shareService.deleteShare(shareId);
  }
}
