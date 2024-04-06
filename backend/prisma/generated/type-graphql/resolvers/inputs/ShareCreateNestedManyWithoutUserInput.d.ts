import { ShareCreateManyUserInputEnvelope } from "../inputs/ShareCreateManyUserInputEnvelope";
import { ShareCreateOrConnectWithoutUserInput } from "../inputs/ShareCreateOrConnectWithoutUserInput";
import { ShareCreateWithoutUserInput } from "../inputs/ShareCreateWithoutUserInput";
import { ShareWhereUniqueInput } from "../inputs/ShareWhereUniqueInput";
export declare class ShareCreateNestedManyWithoutUserInput {
    create?: ShareCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ShareCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: ShareCreateManyUserInputEnvelope | undefined;
    connect?: ShareWhereUniqueInput[] | undefined;
}
