import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostService } from '../../post/post.service';
import { Post } from '../models/post.model';
import { PostCreateInput, PostUpdateInput } from '../../post/dto/post.dto';

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
  getPosts() {
    return this.postService.getPosts();
  }

  // Get post by ID
  @Query(() => Post, { name: 'post' })
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
