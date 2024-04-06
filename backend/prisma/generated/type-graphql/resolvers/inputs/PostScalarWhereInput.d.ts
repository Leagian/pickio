import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    location?: JsonNullableFilter | undefined;
    images?: StringNullableListFilter | undefined;
    tags?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
