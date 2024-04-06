import { UserCreateOrConnectWithoutBookmarksInput } from "../inputs/UserCreateOrConnectWithoutBookmarksInput";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutBookmarksInput {
    create?: UserCreateWithoutBookmarksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
