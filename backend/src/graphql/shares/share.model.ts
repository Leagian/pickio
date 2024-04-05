import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { User } from '../users/user.model';
import { Post } from '../posts/post.model';

@ObjectType()
export class Share {
  @Field(() => ID)
  shareId: string;

  @Field()
  postId: string;

  @Field()
  userId: string;

  @Field()
  @IsDate()
  createdAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Post)
  post: Post;
}
