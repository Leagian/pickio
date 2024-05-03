import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty, IsDate } from 'class-validator';
import { User } from './user.model';

//* USER FOLLOWS INFO *//

@ObjectType()
export class UserFollows {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  userFollowsId: string;

  @Field()
  @IsNotEmpty()
  @IsUUID()
  followerId: string;

  @Field()
  @IsNotEmpty()
  @IsUUID()
  followingId: string;

  @Field(() => User)
  follower: User;

  @Field(() => User)
  following: User;

  @Field()
  @IsDate()
  createdAt: Date;
}
