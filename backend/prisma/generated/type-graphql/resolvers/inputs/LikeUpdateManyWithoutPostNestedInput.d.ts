import { LikeCreateManyPostInputEnvelope } from "../inputs/LikeCreateManyPostInputEnvelope";
import { LikeCreateOrConnectWithoutPostInput } from "../inputs/LikeCreateOrConnectWithoutPostInput";
import { LikeCreateWithoutPostInput } from "../inputs/LikeCreateWithoutPostInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutPostInput } from "../inputs/LikeUpdateManyWithWhereWithoutPostInput";
import { LikeUpdateWithWhereUniqueWithoutPostInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutPostInput";
import { LikeUpsertWithWhereUniqueWithoutPostInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";
export declare class LikeUpdateManyWithoutPostNestedInput {
    create?: LikeCreateWithoutPostInput[] | undefined;
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: LikeCreateManyPostInputEnvelope | undefined;
    set?: LikeWhereUniqueInput[] | undefined;
    disconnect?: LikeWhereUniqueInput[] | undefined;
    delete?: LikeWhereUniqueInput[] | undefined;
    connect?: LikeWhereUniqueInput[] | undefined;
    update?: LikeUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: LikeScalarWhereInput[] | undefined;
}
