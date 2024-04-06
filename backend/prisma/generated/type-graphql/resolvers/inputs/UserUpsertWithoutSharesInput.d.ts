import { UserCreateWithoutSharesInput } from "../inputs/UserCreateWithoutSharesInput";
import { UserUpdateWithoutSharesInput } from "../inputs/UserUpdateWithoutSharesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutSharesInput {
    update: UserUpdateWithoutSharesInput;
    create: UserCreateWithoutSharesInput;
    where?: UserWhereInput | undefined;
}
