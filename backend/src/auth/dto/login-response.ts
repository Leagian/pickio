import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../graphql/models/user.model';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}
