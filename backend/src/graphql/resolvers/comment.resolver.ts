import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CommentService } from '../../comment/comment.service';
import { Comment, CommentCreateInput } from '../models/comment.model';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  //* CREATE *//

  // Create comment
  @Mutation(() => Comment)
  createComment(
    @Args('postId') postId: string,
    @Args('userId') userId: string,
    @Args('data') data: CommentCreateInput,
  ) {
    return this.commentService.createComment(postId, userId, data);
  }

  //* GET *//

  // Get comments
  @Query(() => [Comment], { name: 'comments' })
  getComments(@Args('postId') postId: string) {
    return this.commentService.getComments(postId);
  }

  //* DELETE *//

  // Delete comment
  @Mutation(() => Comment)
  deleteComment(
    @Args('postId') postId: string,
    @Args('commentId') commentId: string,
    @Args('userId') userId: string,
  ) {
    return this.commentService.deleteComment(postId, commentId, userId);
  }
}
