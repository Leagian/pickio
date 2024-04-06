import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";
export declare class LikeCreateWithoutUserInput {
    likeId?: string | undefined;
    createdAt?: Date | undefined;
    Post: PostCreateNestedOneWithoutLikesInput;
}
