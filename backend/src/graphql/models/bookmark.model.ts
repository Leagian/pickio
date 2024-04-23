import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';

//* BOOKMARK INFO *//

@ObjectType()
export class Bookmark {
  @Field(() => ID)
  bookmarkId: string;

  @Field()
  postId: string;

  @Field()
  userId: string;

  @Field()
  createdAt: Date;
}

//* CREATE BOOKMARK *//

@InputType()
export class BookmarkCreateInput {
  @Field()
  postId: string;

  @Field()
  userId: string;
}
