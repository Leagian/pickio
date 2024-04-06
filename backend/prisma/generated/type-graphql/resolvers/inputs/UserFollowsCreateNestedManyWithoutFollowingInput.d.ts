import { UserFollowsCreateManyFollowingInputEnvelope } from "../inputs/UserFollowsCreateManyFollowingInputEnvelope";
import { UserFollowsCreateOrConnectWithoutFollowingInput } from "../inputs/UserFollowsCreateOrConnectWithoutFollowingInput";
import { UserFollowsCreateWithoutFollowingInput } from "../inputs/UserFollowsCreateWithoutFollowingInput";
import { UserFollowsWhereUniqueInput } from "../inputs/UserFollowsWhereUniqueInput";
export declare class UserFollowsCreateNestedManyWithoutFollowingInput {
    create?: UserFollowsCreateWithoutFollowingInput[] | undefined;
    connectOrCreate?: UserFollowsCreateOrConnectWithoutFollowingInput[] | undefined;
    createMany?: UserFollowsCreateManyFollowingInputEnvelope | undefined;
    connect?: UserFollowsWhereUniqueInput[] | undefined;
}
