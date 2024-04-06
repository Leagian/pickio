import { PostCreateNestedOneWithoutBookmarksInput } from "../inputs/PostCreateNestedOneWithoutBookmarksInput";
import { UserCreateNestedOneWithoutBookmarksInput } from "../inputs/UserCreateNestedOneWithoutBookmarksInput";
export declare class BookmarkCreateInput {
    bookmarkId?: string | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutBookmarksInput;
    Post: PostCreateNestedOneWithoutBookmarksInput;
}
