import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostService } from '../../post/post.service';
import { Post } from '../models/post.model';
import { PostCreateInput, PostUpdateInput } from '../../post/dto/post.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  //* CREATE *//

  // create a post
  @Mutation(() => Post)
  createPost(@Args('data') data: PostCreateInput) {
    return this.postService.createPost(data);
  }

  //* GET *//

  // Get posts
  @Query(() => [Post], { name: 'posts' })
  @UseGuards(JwtAuthGuard)
  getPosts() {
    return this.postService.getPosts();
  }

  // Get posts by user ID
  @Query(() => [Post], { name: 'postsByUserId' })
  @UseGuards(JwtAuthGuard)
  getPostsByUserId(@Args('userId') userId: string) {
    return this.postService.getPostsByUserId(userId);
  }

  // Get posts by following ID
  @Query(() => [Post], { name: 'postsByFollowingId' })
  // @UseGuards(JwtAuthGuard)
  getPostsByFollowingId(@Args('userId') userId: string) {
    return this.postService.getPostsByFollowingId(userId);
  }

  // Get post by ID
  @Query(() => Post, { name: 'post' })
  @UseGuards(JwtAuthGuard)
  async getPostById(@Args('postId') postId: string) {
    return this.postService.getPostById(postId);
  }

  //* UPDATE *//

  @Mutation(() => Post, { name: 'updatePost' })
  async updatePost(
    @Args('postId') postId: string,
    @Args('data') data: PostUpdateInput,
  ) {
    return this.postService.updatePost(postId, data);
  }

  //* DELETE *//

  @Mutation(() => Post, { name: 'deletePost' })
  async deletePost(@Args('postId') postId: string) {
    return this.postService.deletePost(postId);
  }
}
