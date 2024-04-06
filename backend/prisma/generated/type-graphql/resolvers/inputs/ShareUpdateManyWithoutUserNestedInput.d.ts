import { ShareCreateManyUserInputEnvelope } from "../inputs/ShareCreateManyUserInputEnvelope";
import { ShareCreateOrConnectWithoutUserInput } from "../inputs/ShareCreateOrConnectWithoutUserInput";
import { ShareCreateWithoutUserInput } from "../inputs/ShareCreateWithoutUserInput";
import { ShareScalarWhereInput } from "../inputs/ShareScalarWhereInput";
import { ShareUpdateManyWithWhereWithoutUserInput } from "../inputs/ShareUpdateManyWithWhereWithoutUserInput";
import { ShareUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ShareUpdateWithWhereUniqueWithoutUserInput";
import { ShareUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ShareUpsertWithWhereUniqueWithoutUserInput";
import { ShareWhereUniqueInput } from "../inputs/ShareWhereUniqueInput";
export declare class ShareUpdateManyWithoutUserNestedInput {
    create?: ShareCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ShareCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: ShareUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: ShareCreateManyUserInputEnvelope | undefined;
    set?: ShareWhereUniqueInput[] | undefined;
    disconnect?: ShareWhereUniqueInput[] | undefined;
    delete?: ShareWhereUniqueInput[] | undefined;
    connect?: ShareWhereUniqueInput[] | undefined;
    update?: ShareUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ShareUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: ShareScalarWhereInput[] | undefined;
}
