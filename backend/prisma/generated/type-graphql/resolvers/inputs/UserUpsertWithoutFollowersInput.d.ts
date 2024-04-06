import { UserCreateWithoutFollowersInput } from "../inputs/UserCreateWithoutFollowersInput";
import { UserUpdateWithoutFollowersInput } from "../inputs/UserUpdateWithoutFollowersInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutFollowersInput {
    update: UserUpdateWithoutFollowersInput;
    create: UserCreateWithoutFollowersInput;
    where?: UserWhereInput | undefined;
}
