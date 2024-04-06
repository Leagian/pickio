import { BookmarkListRelationFilter } from "../inputs/BookmarkListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { ShareListRelationFilter } from "../inputs/ShareListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    location?: JsonNullableFilter | undefined;
    images?: StringNullableListFilter | undefined;
    tags?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    likes?: LikeListRelationFilter | undefined;
    shares?: ShareListRelationFilter | undefined;
    bookmarks?: BookmarkListRelationFilter | undefined;
}
