import { Field, InputType } from '@nestjs/graphql';

//* SHARE CREATE INPUT *//

@InputType()
export class ShareCreateInput {
  @Field()
  postId: string;

  @Field()
  userId: string;
}
