import { BookmarkCreateInput } from "../../../inputs/BookmarkCreateInput";
import { BookmarkUpdateInput } from "../../../inputs/BookmarkUpdateInput";
import { BookmarkWhereUniqueInput } from "../../../inputs/BookmarkWhereUniqueInput";
export declare class UpsertOneBookmarkArgs {
    where: BookmarkWhereUniqueInput;
    create: BookmarkCreateInput;
    update: BookmarkUpdateInput;
}
