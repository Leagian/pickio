import { PostCreateOrConnectWithoutSharesInput } from "../inputs/PostCreateOrConnectWithoutSharesInput";
import { PostCreateWithoutSharesInput } from "../inputs/PostCreateWithoutSharesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutSharesInput {
    create?: PostCreateWithoutSharesInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutSharesInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
