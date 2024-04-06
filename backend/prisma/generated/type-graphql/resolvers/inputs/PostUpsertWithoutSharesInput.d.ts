import { PostCreateWithoutSharesInput } from "../inputs/PostCreateWithoutSharesInput";
import { PostUpdateWithoutSharesInput } from "../inputs/PostUpdateWithoutSharesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";
export declare class PostUpsertWithoutSharesInput {
    update: PostUpdateWithoutSharesInput;
    create: PostCreateWithoutSharesInput;
    where?: PostWhereInput | undefined;
}
