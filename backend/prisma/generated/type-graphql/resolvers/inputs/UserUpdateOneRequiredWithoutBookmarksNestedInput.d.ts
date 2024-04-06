import { UserCreateOrConnectWithoutBookmarksInput } from "../inputs/UserCreateOrConnectWithoutBookmarksInput";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserUpdateToOneWithWhereWithoutBookmarksInput } from "../inputs/UserUpdateToOneWithWhereWithoutBookmarksInput";
import { UserUpsertWithoutBookmarksInput } from "../inputs/UserUpsertWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutBookmarksNestedInput {
    create?: UserCreateWithoutBookmarksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | undefined;
    upsert?: UserUpsertWithoutBookmarksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutBookmarksInput | undefined;
}
