import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class LikeOrderByWithRelationInput {
    likeId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    Post?: PostOrderByWithRelationInput | undefined;
}
