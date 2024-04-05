import { Field, ObjectType, ID } from '@nestjs/graphql';

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
