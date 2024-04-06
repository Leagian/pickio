import { UserCreateNestedOneWithoutBookmarksInput } from "../inputs/UserCreateNestedOneWithoutBookmarksInput";
export declare class BookmarkCreateWithoutPostInput {
    bookmarkId?: string | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutBookmarksInput;
}
