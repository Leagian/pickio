import { UserFollowsCreateManyFollowerInputEnvelope } from "../inputs/UserFollowsCreateManyFollowerInputEnvelope";
import { UserFollowsCreateOrConnectWithoutFollowerInput } from "../inputs/UserFollowsCreateOrConnectWithoutFollowerInput";
import { UserFollowsCreateWithoutFollowerInput } from "../inputs/UserFollowsCreateWithoutFollowerInput";
import { UserFollowsWhereUniqueInput } from "../inputs/UserFollowsWhereUniqueInput";
export declare class UserFollowsCreateNestedManyWithoutFollowerInput {
    create?: UserFollowsCreateWithoutFollowerInput[] | undefined;
    connectOrCreate?: UserFollowsCreateOrConnectWithoutFollowerInput[] | undefined;
    createMany?: UserFollowsCreateManyFollowerInputEnvelope | undefined;
    connect?: UserFollowsWhereUniqueInput[] | undefined;
}
