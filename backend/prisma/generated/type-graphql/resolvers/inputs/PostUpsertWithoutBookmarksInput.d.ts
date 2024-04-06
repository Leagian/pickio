import { PostCreateWithoutBookmarksInput } from "../inputs/PostCreateWithoutBookmarksInput";
import { PostUpdateWithoutBookmarksInput } from "../inputs/PostUpdateWithoutBookmarksInput";
import { PostWhereInput } from "../inputs/PostWhereInput";
export declare class PostUpsertWithoutBookmarksInput {
    update: PostUpdateWithoutBookmarksInput;
    create: PostCreateWithoutBookmarksInput;
    where?: PostWhereInput | undefined;
}
