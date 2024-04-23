import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { User } from './user.model';
import { Post } from './post.model';

//* SHARE INFO *//

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

//* SHARE CREATE INPUT *//

@InputType()
export class ShareCreateInput {
  @Field()
  postId: string;

  @Field()
  userId: string;
}
