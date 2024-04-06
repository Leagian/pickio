import { PostCreateOrConnectWithoutLikesInput } from "../inputs/PostCreateOrConnectWithoutLikesInput";
import { PostCreateWithoutLikesInput } from "../inputs/PostCreateWithoutLikesInput";
import { PostUpdateToOneWithWhereWithoutLikesInput } from "../inputs/PostUpdateToOneWithWhereWithoutLikesInput";
import { PostUpsertWithoutLikesInput } from "../inputs/PostUpsertWithoutLikesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneRequiredWithoutLikesNestedInput {
    create?: PostCreateWithoutLikesInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | undefined;
    upsert?: PostUpsertWithoutLikesInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateToOneWithWhereWithoutLikesInput | undefined;
}
