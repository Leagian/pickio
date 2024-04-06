import { ShareCreateManyPostInputEnvelope } from "../inputs/ShareCreateManyPostInputEnvelope";
import { ShareCreateOrConnectWithoutPostInput } from "../inputs/ShareCreateOrConnectWithoutPostInput";
import { ShareCreateWithoutPostInput } from "../inputs/ShareCreateWithoutPostInput";
import { ShareWhereUniqueInput } from "../inputs/ShareWhereUniqueInput";
export declare class ShareCreateNestedManyWithoutPostInput {
    create?: ShareCreateWithoutPostInput[] | undefined;
    connectOrCreate?: ShareCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: ShareCreateManyPostInputEnvelope | undefined;
    connect?: ShareWhereUniqueInput[] | undefined;
}
