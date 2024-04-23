import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostService } from '../../post/post.service';
import { Post, PostCreateInput, PostUpdateInput } from '../models/post.model';

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

  @Mutation(() => Post)
  async updatePost(
    @Args('postId') postId: string,
    @Args('data') data: PostUpdateInput,
  ) {
    return this.postService.updatePost(postId, data);
  }

  //* DELETE *//

  @Mutation(() => Post)
  async deletePost(@Args('postId') postId: string) {
    return this.postService.deletePost(postId);
  }
}
