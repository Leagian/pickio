import { UserCreateOrConnectWithoutSharesInput } from "../inputs/UserCreateOrConnectWithoutSharesInput";
import { UserCreateWithoutSharesInput } from "../inputs/UserCreateWithoutSharesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSharesInput {
    create?: UserCreateWithoutSharesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
