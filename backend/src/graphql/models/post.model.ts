import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { IsDate, IsString, IsOptional, IsArray } from 'class-validator';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Location } from './location.interface';
import { User } from './user.model';
import { Bookmark } from './bookmark.model';
import { Comment } from './comment.model';
import { Like } from './like.model';
import { Share } from './share.model';

//* POST INFO *//

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

//* CREATE POST *//

@InputType()
export class PostCreateInput {
  @Field()
  @IsString()
  userId: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  address?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @IsOptional()
  location?: any;

  @Field(() => [String])
  @IsArray()
  images: string[];

  @Field(() => [String])
  @IsArray()
  tags: string[];
}

//* UPDATE POST *//

@InputType()
export class PostUpdateInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  userId?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  address?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @IsOptional()
  location?: any;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  images?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  tags?: string[];
}
