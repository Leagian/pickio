import { UserCreateNestedOneWithoutFollowersInput } from "../inputs/UserCreateNestedOneWithoutFollowersInput";
export declare class UserFollowsCreateWithoutFollowingInput {
    UserFollowsId?: string | undefined;
    createdAt?: Date | undefined;
    follower: UserCreateNestedOneWithoutFollowersInput;
}
