import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    commentId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    Post?: PostOrderByWithRelationInput | undefined;
}
