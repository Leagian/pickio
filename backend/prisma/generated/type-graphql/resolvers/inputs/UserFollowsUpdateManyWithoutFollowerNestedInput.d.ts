import { UserFollowsCreateManyFollowerInputEnvelope } from "../inputs/UserFollowsCreateManyFollowerInputEnvelope";
import { UserFollowsCreateOrConnectWithoutFollowerInput } from "../inputs/UserFollowsCreateOrConnectWithoutFollowerInput";
import { UserFollowsCreateWithoutFollowerInput } from "../inputs/UserFollowsCreateWithoutFollowerInput";
import { UserFollowsScalarWhereInput } from "../inputs/UserFollowsScalarWhereInput";
import { UserFollowsUpdateManyWithWhereWithoutFollowerInput } from "../inputs/UserFollowsUpdateManyWithWhereWithoutFollowerInput";
import { UserFollowsUpdateWithWhereUniqueWithoutFollowerInput } from "../inputs/UserFollowsUpdateWithWhereUniqueWithoutFollowerInput";
import { UserFollowsUpsertWithWhereUniqueWithoutFollowerInput } from "../inputs/UserFollowsUpsertWithWhereUniqueWithoutFollowerInput";
import { UserFollowsWhereUniqueInput } from "../inputs/UserFollowsWhereUniqueInput";
export declare class UserFollowsUpdateManyWithoutFollowerNestedInput {
    create?: UserFollowsCreateWithoutFollowerInput[] | undefined;
    connectOrCreate?: UserFollowsCreateOrConnectWithoutFollowerInput[] | undefined;
    upsert?: UserFollowsUpsertWithWhereUniqueWithoutFollowerInput[] | undefined;
    createMany?: UserFollowsCreateManyFollowerInputEnvelope | undefined;
    set?: UserFollowsWhereUniqueInput[] | undefined;
    disconnect?: UserFollowsWhereUniqueInput[] | undefined;
    delete?: UserFollowsWhereUniqueInput[] | undefined;
    connect?: UserFollowsWhereUniqueInput[] | undefined;
    update?: UserFollowsUpdateWithWhereUniqueWithoutFollowerInput[] | undefined;
    updateMany?: UserFollowsUpdateManyWithWhereWithoutFollowerInput[] | undefined;
    deleteMany?: UserFollowsScalarWhereInput[] | undefined;
}
