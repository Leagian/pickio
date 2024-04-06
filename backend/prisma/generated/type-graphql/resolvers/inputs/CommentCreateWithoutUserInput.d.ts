import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutUserInput {
    commentId?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    Post: PostCreateNestedOneWithoutCommentsInput;
}
