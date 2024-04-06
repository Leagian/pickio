import { BookmarkWhereInput } from "../inputs/BookmarkWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BookmarkWhereUniqueInput {
    bookmarkId?: string | undefined;
    AND?: BookmarkWhereInput[] | undefined;
    OR?: BookmarkWhereInput[] | undefined;
    NOT?: BookmarkWhereInput[] | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    Post?: PostRelationFilter | undefined;
}
