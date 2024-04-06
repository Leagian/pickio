import { PostCreateOrConnectWithoutSharesInput } from "../inputs/PostCreateOrConnectWithoutSharesInput";
import { PostCreateWithoutSharesInput } from "../inputs/PostCreateWithoutSharesInput";
import { PostUpdateToOneWithWhereWithoutSharesInput } from "../inputs/PostUpdateToOneWithWhereWithoutSharesInput";
import { PostUpsertWithoutSharesInput } from "../inputs/PostUpsertWithoutSharesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneRequiredWithoutSharesNestedInput {
    create?: PostCreateWithoutSharesInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutSharesInput | undefined;
    upsert?: PostUpsertWithoutSharesInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateToOneWithWhereWithoutSharesInput | undefined;
}
