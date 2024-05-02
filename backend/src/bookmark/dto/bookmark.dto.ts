import { Field, InputType } from '@nestjs/graphql';

//* CREATE BOOKMARK *//

@InputType()
export class BookmarkCreateInput {
  @Field()
  postId: string;

  @Field()
  userId: string;
}
