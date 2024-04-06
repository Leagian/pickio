import { PostCreateNestedOneWithoutSharesInput } from "../inputs/PostCreateNestedOneWithoutSharesInput";
export declare class ShareCreateWithoutUserInput {
    shareId?: string | undefined;
    createdAt?: Date | undefined;
    Post: PostCreateNestedOneWithoutSharesInput;
}
