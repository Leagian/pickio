import { BookmarkOrderByWithRelationInput } from "../../../inputs/BookmarkOrderByWithRelationInput";
import { BookmarkWhereInput } from "../../../inputs/BookmarkWhereInput";
import { BookmarkWhereUniqueInput } from "../../../inputs/BookmarkWhereUniqueInput";
export declare class FindFirstBookmarkArgs {
    where?: BookmarkWhereInput | undefined;
    orderBy?: BookmarkOrderByWithRelationInput[] | undefined;
    cursor?: BookmarkWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"bookmarkId" | "postId" | "userId" | "createdAt"> | undefined;
}
