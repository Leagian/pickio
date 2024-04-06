import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";
export declare class LikeCreateWithoutPostInput {
    likeId?: string | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutLikesInput;
}
