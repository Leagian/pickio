import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Post } from '../posts/post.model';
import { User } from '../users/user.model';

@ObjectType()
export class Comment {
  @Field(() => ID)
  commentId: string;

  @Field()
  postId: string;

  @Field()
  userId: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Post)
  post: Post;
}
