import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsDate, Length } from 'class-validator';
import { Comment } from './comment.model';
import { Bookmark } from './bookmark.model';
import { Post } from './post.model';
import { Share } from './share.model';
import { Like } from './like.model';
import { UserFollows } from './userFollow.model';

//* USER INFO *//

@ObjectType()
export class User {
  @Field(() => ID)
  userId: string;

  @Field()
  @IsNotEmpty({ message: 'The username is required' })
  @Length(3, 20, {
    message: 'The username must be between 3 and 20 characters long.',
  })
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  profilePicture?: string;

  @Field({ nullable: true })
  @IsOptional()
  bio?: string;

  @Field({ nullable: true })
  @IsOptional()
  interests?: string;

  @Field()
  @IsDate()
  createdAt: Date;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => [Like])
  likes: Like[];

  @Field(() => [Share])
  shares: Share[];

  @Field(() => [Bookmark])
  bookmarks: Bookmark[];

  @Field(() => [UserFollows], { nullable: true })
  followers?: UserFollows[];

  @Field(() => [UserFollows], { nullable: true })
  followings?: UserFollows[];
}

//* USER SEARCH *//

@ObjectType()
export class UserSearchResult {
  @Field(() => ID)
  userId: string;

  @Field()
  username: string;
}
