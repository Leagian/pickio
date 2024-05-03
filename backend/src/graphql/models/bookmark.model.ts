import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty, IsDate } from 'class-validator';

//* BOOKMARK INFO *//

@ObjectType()
export class Bookmark {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  bookmarkId: string;

  @Field()
  postId: string;

  @Field()
  userId: string;

  @Field()
  @IsDate()
  createdAt: Date;
}
