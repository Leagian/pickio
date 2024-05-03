import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty, IsDate } from 'class-validator';
import { Post } from './post.model';
import { User } from './user.model';

//* COMMENT INFO *//

@ObjectType()
export class Comment {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  commentId: string;

  @Field()
  postId: string;

  @Field()
  userId: string;

  @Field()
  content: string;

  @Field()
  @IsDate()
  createdAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Post)
  post: Post;
}
