import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty, IsDate } from 'class-validator';
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
  @IsNotEmpty()
  @IsUUID()
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
