import { BookmarkOrderByRelationAggregateInput } from "../inputs/BookmarkOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { LikeOrderByRelationAggregateInput } from "../inputs/LikeOrderByRelationAggregateInput";
import { ShareOrderByRelationAggregateInput } from "../inputs/ShareOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    content?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    location?: SortOrderInput | undefined;
    images?: "asc" | "desc" | undefined;
    tags?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    likes?: LikeOrderByRelationAggregateInput | undefined;
    shares?: ShareOrderByRelationAggregateInput | undefined;
    bookmarks?: BookmarkOrderByRelationAggregateInput | undefined;
}
