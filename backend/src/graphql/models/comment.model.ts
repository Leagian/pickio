import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Post } from './post.model';
import { User } from './user.model';

//* COMMENT INFO *//

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

//* CREATE COMMENT *//

@InputType()
export class CommentCreateInput {
  @Field()
  @IsString()
  postId: string;

  @Field()
  @IsString()
  userId: string;

  @Field()
  @IsString()
  content: string;
}
