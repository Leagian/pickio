import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Post } from '../posts/post.model';
import { User } from '../users/user.model';

@ObjectType()
export class Like {
  @Field(() => ID)
  likeId: string;

  @Field()
  postId: string;

  @Field()
  userId: string;

  @Field()
  createdAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Post)
  post: Post;
}
