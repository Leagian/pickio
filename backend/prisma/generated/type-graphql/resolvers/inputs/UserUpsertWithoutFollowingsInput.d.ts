import { UserCreateWithoutFollowingsInput } from "../inputs/UserCreateWithoutFollowingsInput";
import { UserUpdateWithoutFollowingsInput } from "../inputs/UserUpdateWithoutFollowingsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutFollowingsInput {
    update: UserUpdateWithoutFollowingsInput;
    create: UserCreateWithoutFollowingsInput;
    where?: UserWhereInput | undefined;
}
