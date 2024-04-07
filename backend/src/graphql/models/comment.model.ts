import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Post } from './post.model';
import { User } from './user.model';

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
