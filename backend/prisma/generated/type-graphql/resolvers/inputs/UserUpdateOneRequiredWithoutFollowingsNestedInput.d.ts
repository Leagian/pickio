import { UserCreateOrConnectWithoutFollowingsInput } from "../inputs/UserCreateOrConnectWithoutFollowingsInput";
import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserUpdateToOneWithWhereWithoutFollowingsInput } from "../inputs/UserUpdateToOneWithWhereWithoutFollowingsInput";
import { UserUpsertWithoutFollowingsInput } from "../inputs/UserUpsertWithoutFollowingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutFollowingsNestedInput {
    create?: UserCreateWithoutFollowingsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput | undefined;
    upsert?: UserUpsertWithoutFollowingsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutFollowingsInput | undefined;
}
