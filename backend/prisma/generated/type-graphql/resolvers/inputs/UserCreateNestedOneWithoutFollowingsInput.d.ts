import { UserCreateOrConnectWithoutFollowingsInput } from "../inputs/UserCreateOrConnectWithoutFollowingsInput";
import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutFollowingsInput {
    create?: UserCreateWithoutFollowingsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
