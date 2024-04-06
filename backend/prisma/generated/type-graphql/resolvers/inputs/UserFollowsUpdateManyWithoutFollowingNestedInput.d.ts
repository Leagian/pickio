import { UserFollowsCreateManyFollowingInputEnvelope } from "../inputs/UserFollowsCreateManyFollowingInputEnvelope";
import { UserFollowsCreateOrConnectWithoutFollowingInput } from "../inputs/UserFollowsCreateOrConnectWithoutFollowingInput";
import { UserFollowsCreateWithoutFollowingInput } from "../inputs/UserFollowsCreateWithoutFollowingInput";
import { UserFollowsScalarWhereInput } from "../inputs/UserFollowsScalarWhereInput";
import { UserFollowsUpdateManyWithWhereWithoutFollowingInput } from "../inputs/UserFollowsUpdateManyWithWhereWithoutFollowingInput";
import { UserFollowsUpdateWithWhereUniqueWithoutFollowingInput } from "../inputs/UserFollowsUpdateWithWhereUniqueWithoutFollowingInput";
import { UserFollowsUpsertWithWhereUniqueWithoutFollowingInput } from "../inputs/UserFollowsUpsertWithWhereUniqueWithoutFollowingInput";
import { UserFollowsWhereUniqueInput } from "../inputs/UserFollowsWhereUniqueInput";
export declare class UserFollowsUpdateManyWithoutFollowingNestedInput {
    create?: UserFollowsCreateWithoutFollowingInput[] | undefined;
    connectOrCreate?: UserFollowsCreateOrConnectWithoutFollowingInput[] | undefined;
    upsert?: UserFollowsUpsertWithWhereUniqueWithoutFollowingInput[] | undefined;
    createMany?: UserFollowsCreateManyFollowingInputEnvelope | undefined;
    set?: UserFollowsWhereUniqueInput[] | undefined;
    disconnect?: UserFollowsWhereUniqueInput[] | undefined;
    delete?: UserFollowsWhereUniqueInput[] | undefined;
    connect?: UserFollowsWhereUniqueInput[] | undefined;
    update?: UserFollowsUpdateWithWhereUniqueWithoutFollowingInput[] | undefined;
    updateMany?: UserFollowsUpdateManyWithWhereWithoutFollowingInput[] | undefined;
    deleteMany?: UserFollowsScalarWhereInput[] | undefined;
}
