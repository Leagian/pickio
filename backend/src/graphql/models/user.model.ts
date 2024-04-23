import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  IsDate,
  Length,
} from 'class-validator';
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
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty({ message: 'The password is required' })
  @MinLength(8, {
    message: 'The password must contain at least 8 characters.',
  })
  password: string;

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

//* CREATE USER *//

@InputType()
export class UserCreateInput {
  @Field()
  @IsNotEmpty({ message: 'The username is required' })
  @Length(3, 20)
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  profilePicture?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  interests?: string;
}

//* UPDATE USER *//

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  @IsOptional()
  @Length(3, 20)
  username?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MinLength(8)
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  profilePicture?: string;

  @Field({ nullable: true })
  @IsOptional()
  bio?: string;

  @Field({ nullable: true })
  @IsOptional()
  interests?: string;
}
