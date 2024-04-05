import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { User } from '../users/user.model';

@ObjectType()
export class UserFollows {
  @Field(() => ID)
  userFollowsId: string;

  @Field()
  followerId: string;

  @Field()
  followingId: string;

  @Field(() => User)
  follower: User;

  @Field(() => User)
  following: User;

  @Field()
  @IsDate()
  createdAt: Date;
}
