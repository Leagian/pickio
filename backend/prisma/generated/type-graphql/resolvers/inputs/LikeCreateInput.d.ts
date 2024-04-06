import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";
export declare class LikeCreateInput {
    likeId?: string | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutLikesInput;
    Post: PostCreateNestedOneWithoutLikesInput;
}
