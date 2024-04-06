import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookmarkScalarWhereWithAggregatesInput {
    AND?: BookmarkScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookmarkScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookmarkScalarWhereWithAggregatesInput[] | undefined;
    bookmarkId?: StringWithAggregatesFilter | undefined;
    postId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
