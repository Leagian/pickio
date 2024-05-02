import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsArray } from 'class-validator';
import { GraphQLJSONObject } from 'graphql-type-json';

//* CREATE POST *//

@InputType()
export class PostCreateInput {
  @Field()
  @IsString()
  userId: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  address?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @IsOptional()
  location?: any;

  @Field(() => [String])
  @IsArray()
  images: string[];

  @Field(() => [String])
  @IsArray()
  tags: string[];
}

//* UPDATE POST *//

@InputType()
export class PostUpdateInput {
  @Field()
  @IsString()
  userId: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  address?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @IsOptional()
  location?: any;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  images?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  tags?: string[];
}
