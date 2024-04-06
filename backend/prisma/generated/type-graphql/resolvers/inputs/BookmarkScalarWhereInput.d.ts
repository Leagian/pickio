import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookmarkScalarWhereInput {
    AND?: BookmarkScalarWhereInput[] | undefined;
    OR?: BookmarkScalarWhereInput[] | undefined;
    NOT?: BookmarkScalarWhereInput[] | undefined;
    bookmarkId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
