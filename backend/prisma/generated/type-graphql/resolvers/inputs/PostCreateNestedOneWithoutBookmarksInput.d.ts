import { PostCreateOrConnectWithoutBookmarksInput } from "../inputs/PostCreateOrConnectWithoutBookmarksInput";
import { PostCreateWithoutBookmarksInput } from "../inputs/PostCreateWithoutBookmarksInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutBookmarksInput {
    create?: PostCreateWithoutBookmarksInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutBookmarksInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
