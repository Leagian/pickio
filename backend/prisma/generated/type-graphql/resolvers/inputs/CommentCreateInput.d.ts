import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    commentId?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutCommentsInput;
    Post: PostCreateNestedOneWithoutCommentsInput;
}
