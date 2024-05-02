import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

//* CREATE COMMENT *//

@InputType()
export class CommentCreateInput {
  @Field()
  @IsString()
  postId: string;

  @Field()
  @IsString()
  userId: string;

  @Field()
  @IsString()
  content: string;
}
