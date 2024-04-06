import { PostCreateOrConnectWithoutLikesInput } from "../inputs/PostCreateOrConnectWithoutLikesInput";
import { PostCreateWithoutLikesInput } from "../inputs/PostCreateWithoutLikesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutLikesInput {
    create?: PostCreateWithoutLikesInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
