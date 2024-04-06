import { UserCreateOrConnectWithoutFollowersInput } from "../inputs/UserCreateOrConnectWithoutFollowersInput";
import { UserCreateWithoutFollowersInput } from "../inputs/UserCreateWithoutFollowersInput";
import { UserUpdateToOneWithWhereWithoutFollowersInput } from "../inputs/UserUpdateToOneWithWhereWithoutFollowersInput";
import { UserUpsertWithoutFollowersInput } from "../inputs/UserUpsertWithoutFollowersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutFollowersNestedInput {
    create?: UserCreateWithoutFollowersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | undefined;
    upsert?: UserUpsertWithoutFollowersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutFollowersInput | undefined;
}
