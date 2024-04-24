import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Post } from './post.model';
import { User } from './user.model';

//* LIKE INFO *//

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

//* CREATE LIKE *//

@InputType()
export class LikeCreateInput {
  @Field()
  postId: string;

  @Field()
  userId: string;
}

//* LIKES AND COUNT *//

@ObjectType()
export class LikesAndCount {
  @Field(() => [Like])
  likes: Like[];

  @Field(() => Number)
  count: number;
}
