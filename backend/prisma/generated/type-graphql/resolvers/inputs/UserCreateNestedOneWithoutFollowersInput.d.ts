import { UserCreateOrConnectWithoutFollowersInput } from "../inputs/UserCreateOrConnectWithoutFollowersInput";
import { UserCreateWithoutFollowersInput } from "../inputs/UserCreateWithoutFollowersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutFollowersInput {
    create?: UserCreateWithoutFollowersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
