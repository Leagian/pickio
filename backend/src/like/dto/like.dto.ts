import { Field, InputType } from '@nestjs/graphql';

//* CREATE LIKE *//

@InputType()
export class LikeCreateInput {
  @Field()
  postId: string;

  @Field()
  userId: string;
}
