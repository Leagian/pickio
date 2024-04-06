import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutPostInput {
    commentId?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutCommentsInput;
}
