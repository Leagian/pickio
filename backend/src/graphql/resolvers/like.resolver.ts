import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { LikeService } from '../../like/like.service';
import { Like, LikesAndCount } from '../models/like.model';
import { LikeCreateInput } from '../../like/dto/like.dto';

@Resolver(() => Like)
export class LikeResolver {
  constructor(private likeService: LikeService) {}

  //* CREATE *//

  // Create like
  @Mutation(() => Like)
  createLike(@Args('data') data: LikeCreateInput) {
    return this.likeService.createLike(data);
  }

  //* GET *//

  // Get likes and their count by post ID
  @Query(() => LikesAndCount, { name: 'getLikesAndCountByPostId' })
  getLikesAndCountByPostId(@Args('postId') postId: string) {
    return this.likeService.getLikesAndCountByPostId(postId);
  }

  //* DELETE *//

  // Delete like
  @Mutation(() => Like, { name: 'deleteLike' })
  deleteLike(@Args('postId') postId: string, @Args('likeId') likeId: string) {
    return this.likeService.deleteLike(postId, likeId);
  }
}
