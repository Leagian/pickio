import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  IsDate,
  Length,
} from 'class-validator';
import { Comment } from '../comments/comment.model';
import { Bookmark } from '../bookmarks/bookmark.model';
import { Post } from '../posts/post.model';
import { Share } from '../shares/share.model';
import { Like } from '../likes/like.model';
import { UserFollows } from '../userFollows/userFollow.model';

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

  @Field(() => [Post])
  posts: Post[];

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => [Like])
  likes: Like[];

  @Field(() => [Share])
  shares: Share[];

  @Field(() => [Bookmark])
  bookmarks: Bookmark[];

  @Field(() => [UserFollows])
  followers: UserFollows[];

  @Field(() => [UserFollows])
  followings: UserFollows[];
}
