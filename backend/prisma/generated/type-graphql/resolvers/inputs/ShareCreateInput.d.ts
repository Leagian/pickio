import { PostCreateNestedOneWithoutSharesInput } from "../inputs/PostCreateNestedOneWithoutSharesInput";
import { UserCreateNestedOneWithoutSharesInput } from "../inputs/UserCreateNestedOneWithoutSharesInput";
export declare class ShareCreateInput {
    shareId?: string | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutSharesInput;
    Post: PostCreateNestedOneWithoutSharesInput;
}
