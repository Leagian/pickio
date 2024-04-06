import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserUpdateWithoutBookmarksInput } from "../inputs/UserUpdateWithoutBookmarksInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutBookmarksInput {
    update: UserUpdateWithoutBookmarksInput;
    create: UserCreateWithoutBookmarksInput;
    where?: UserWhereInput | undefined;
}
