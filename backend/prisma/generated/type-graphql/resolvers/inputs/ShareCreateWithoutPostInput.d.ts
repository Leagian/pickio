import { UserCreateNestedOneWithoutSharesInput } from "../inputs/UserCreateNestedOneWithoutSharesInput";
export declare class ShareCreateWithoutPostInput {
    shareId?: string | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutSharesInput;
}
