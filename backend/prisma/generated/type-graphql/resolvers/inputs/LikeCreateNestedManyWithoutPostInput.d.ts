import { LikeCreateManyPostInputEnvelope } from "../inputs/LikeCreateManyPostInputEnvelope";
import { LikeCreateOrConnectWithoutPostInput } from "../inputs/LikeCreateOrConnectWithoutPostInput";
import { LikeCreateWithoutPostInput } from "../inputs/LikeCreateWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";
export declare class LikeCreateNestedManyWithoutPostInput {
    create?: LikeCreateWithoutPostInput[] | undefined;
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: LikeCreateManyPostInputEnvelope | undefined;
    connect?: LikeWhereUniqueInput[] | undefined;
}
