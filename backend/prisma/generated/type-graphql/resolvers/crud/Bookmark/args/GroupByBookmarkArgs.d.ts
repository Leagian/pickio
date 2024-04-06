import { BookmarkOrderByWithAggregationInput } from "../../../inputs/BookmarkOrderByWithAggregationInput";
import { BookmarkScalarWhereWithAggregatesInput } from "../../../inputs/BookmarkScalarWhereWithAggregatesInput";
import { BookmarkWhereInput } from "../../../inputs/BookmarkWhereInput";
export declare class GroupByBookmarkArgs {
    where?: BookmarkWhereInput | undefined;
    orderBy?: BookmarkOrderByWithAggregationInput[] | undefined;
    by: Array<"bookmarkId" | "postId" | "userId" | "createdAt">;
    having?: BookmarkScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
