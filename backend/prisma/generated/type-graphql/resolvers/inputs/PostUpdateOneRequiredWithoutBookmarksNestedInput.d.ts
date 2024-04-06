import { PostCreateOrConnectWithoutBookmarksInput } from "../inputs/PostCreateOrConnectWithoutBookmarksInput";
import { PostCreateWithoutBookmarksInput } from "../inputs/PostCreateWithoutBookmarksInput";
import { PostUpdateToOneWithWhereWithoutBookmarksInput } from "../inputs/PostUpdateToOneWithWhereWithoutBookmarksInput";
import { PostUpsertWithoutBookmarksInput } from "../inputs/PostUpsertWithoutBookmarksInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneRequiredWithoutBookmarksNestedInput {
    create?: PostCreateWithoutBookmarksInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutBookmarksInput | undefined;
    upsert?: PostUpsertWithoutBookmarksInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateToOneWithWhereWithoutBookmarksInput | undefined;
}
