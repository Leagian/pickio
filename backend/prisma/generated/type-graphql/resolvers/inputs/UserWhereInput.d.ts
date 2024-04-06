import { BookmarkListRelationFilter } from "../inputs/BookmarkListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ShareListRelationFilter } from "../inputs/ShareListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserFollowsListRelationFilter } from "../inputs/UserFollowsListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    username?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    profilePicture?: StringNullableFilter | undefined;
    bio?: StringNullableFilter | undefined;
    interests?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    likes?: LikeListRelationFilter | undefined;
    shares?: ShareListRelationFilter | undefined;
    bookmarks?: BookmarkListRelationFilter | undefined;
    followers?: UserFollowsListRelationFilter | undefined;
    followings?: UserFollowsListRelationFilter | undefined;
}
