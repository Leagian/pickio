import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  Length,
} from 'class-validator';

//* CREATE USER *//

@InputType()
export class UserCreateInput {
  @Field()
  @IsNotEmpty({ message: 'The username is required' })
  @Length(3, 20)
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  profilePicture?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  interests?: string;
}

//* UPDATE USER *//

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  @IsOptional()
  @Length(3, 20)
  username?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MinLength(8)
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  profilePicture?: string;

  @Field({ nullable: true })
  @IsOptional()
  bio?: string;

  @Field({ nullable: true })
  @IsOptional()
  interests?: string;
}
