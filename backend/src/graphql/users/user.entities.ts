import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  user_id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  profile_picture?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  interests?: string;

  @Field()
  created_at: Date;

  // Pour les relations, vous pouvez utiliser des types ou des identifiants
  // Cela dépend de la manière dont vous voulez exposer ces informations via GraphQL
}
