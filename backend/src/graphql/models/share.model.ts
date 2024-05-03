import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty, IsDate } from 'class-validator';
import { User } from './user.model';
import { Post } from './post.model';

//* SHARE INFO *//

@ObjectType()
export class Share {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
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
