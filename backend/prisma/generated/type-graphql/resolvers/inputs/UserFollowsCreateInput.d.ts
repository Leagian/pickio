import { UserCreateNestedOneWithoutFollowersInput } from "../inputs/UserCreateNestedOneWithoutFollowersInput";
import { UserCreateNestedOneWithoutFollowingsInput } from "../inputs/UserCreateNestedOneWithoutFollowingsInput";
export declare class UserFollowsCreateInput {
    UserFollowsId?: string | undefined;
    createdAt?: Date | undefined;
    follower: UserCreateNestedOneWithoutFollowersInput;
    following: UserCreateNestedOneWithoutFollowingsInput;
}
