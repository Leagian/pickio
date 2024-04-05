import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Location } from './interfaces/location.interface';
import { User } from '../users/user.model';
import { Bookmark } from '../bookmarks/bookmark.model';
import { Comment } from '../comments/comment.model';
import { Like } from '../likes/like.model';
import { Share } from '../shares/share.model';

@ObjectType()
export class Post {
  @Field(() => ID)
  postId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  location?: Location;

  @Field(() => [String])
  images: string[];

  @Field(() => [String])
  tags: string[];

  @Field()
  @IsDate()
  createdAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [Like], { nullable: true })
  likes?: Like[];

  @Field(() => [Share], { nullable: true })
  shares?: Share[];

  @Field(() => [Bookmark], { nullable: true })
  bookmarks?: Bookmark[];
}
