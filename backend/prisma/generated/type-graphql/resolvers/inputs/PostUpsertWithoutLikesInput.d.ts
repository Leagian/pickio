import { PostCreateWithoutLikesInput } from "../inputs/PostCreateWithoutLikesInput";
import { PostUpdateWithoutLikesInput } from "../inputs/PostUpdateWithoutLikesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";
export declare class PostUpsertWithoutLikesInput {
    update: PostUpdateWithoutLikesInput;
    create: PostCreateWithoutLikesInput;
    where?: PostWhereInput | undefined;
}
