import { PostCreateNestedOneWithoutBookmarksInput } from "../inputs/PostCreateNestedOneWithoutBookmarksInput";
export declare class BookmarkCreateWithoutUserInput {
    bookmarkId?: string | undefined;
    createdAt?: Date | undefined;
    Post: PostCreateNestedOneWithoutBookmarksInput;
}
