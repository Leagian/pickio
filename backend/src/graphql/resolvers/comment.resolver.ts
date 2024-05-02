import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CommentService } from '../../comment/comment.service';
import { Comment } from '../models/comment.model';
import { CommentCreateInput } from '../../comment/dto/comment.dto';

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
  @Mutation(() => Comment, { name: 'deleteComment' })
  deleteComment(
    @Args('postId') postId: string,
    @Args('commentId') commentId: string,
    @Args('userId') userId: string,
  ) {
    return this.commentService.deleteComment(postId, commentId, userId);
  }
}
