import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty, IsDate } from 'class-validator';
import { Post } from './post.model';
import { User } from './user.model';

//* LIKE INFO *//

@ObjectType()
export class Like {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  likeId: string;

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

//* LIKES AND COUNT *//

@ObjectType()
export class LikesAndCount {
  @Field(() => [Like])
  likes: Like[];

  @Field(() => Number)
  count: number;
}
