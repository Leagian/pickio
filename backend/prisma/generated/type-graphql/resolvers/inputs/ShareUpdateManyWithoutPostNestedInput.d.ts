import { ShareCreateManyPostInputEnvelope } from "../inputs/ShareCreateManyPostInputEnvelope";
import { ShareCreateOrConnectWithoutPostInput } from "../inputs/ShareCreateOrConnectWithoutPostInput";
import { ShareCreateWithoutPostInput } from "../inputs/ShareCreateWithoutPostInput";
import { ShareScalarWhereInput } from "../inputs/ShareScalarWhereInput";
import { ShareUpdateManyWithWhereWithoutPostInput } from "../inputs/ShareUpdateManyWithWhereWithoutPostInput";
import { ShareUpdateWithWhereUniqueWithoutPostInput } from "../inputs/ShareUpdateWithWhereUniqueWithoutPostInput";
import { ShareUpsertWithWhereUniqueWithoutPostInput } from "../inputs/ShareUpsertWithWhereUniqueWithoutPostInput";
import { ShareWhereUniqueInput } from "../inputs/ShareWhereUniqueInput";
export declare class ShareUpdateManyWithoutPostNestedInput {
    create?: ShareCreateWithoutPostInput[] | undefined;
    connectOrCreate?: ShareCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: ShareUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: ShareCreateManyPostInputEnvelope | undefined;
    set?: ShareWhereUniqueInput[] | undefined;
    disconnect?: ShareWhereUniqueInput[] | undefined;
    delete?: ShareWhereUniqueInput[] | undefined;
    connect?: ShareWhereUniqueInput[] | undefined;
    update?: ShareUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: ShareUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: ShareScalarWhereInput[] | undefined;
}
