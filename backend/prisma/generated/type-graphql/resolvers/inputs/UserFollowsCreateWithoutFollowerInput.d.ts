import { UserCreateNestedOneWithoutFollowingsInput } from "../inputs/UserCreateNestedOneWithoutFollowingsInput";
export declare class UserFollowsCreateWithoutFollowerInput {
    UserFollowsId?: string | undefined;
    createdAt?: Date | undefined;
    following: UserCreateNestedOneWithoutFollowingsInput;
}
