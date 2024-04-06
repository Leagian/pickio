import { UserCreateOrConnectWithoutSharesInput } from "../inputs/UserCreateOrConnectWithoutSharesInput";
import { UserCreateWithoutSharesInput } from "../inputs/UserCreateWithoutSharesInput";
import { UserUpdateToOneWithWhereWithoutSharesInput } from "../inputs/UserUpdateToOneWithWhereWithoutSharesInput";
import { UserUpsertWithoutSharesInput } from "../inputs/UserUpsertWithoutSharesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSharesNestedInput {
    create?: UserCreateWithoutSharesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput | undefined;
    upsert?: UserUpsertWithoutSharesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutSharesInput | undefined;
}
