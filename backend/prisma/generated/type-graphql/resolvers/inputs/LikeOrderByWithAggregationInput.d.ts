import { LikeCountOrderByAggregateInput } from "../inputs/LikeCountOrderByAggregateInput";
import { LikeMaxOrderByAggregateInput } from "../inputs/LikeMaxOrderByAggregateInput";
import { LikeMinOrderByAggregateInput } from "../inputs/LikeMinOrderByAggregateInput";
export declare class LikeOrderByWithAggregationInput {
    likeId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: LikeCountOrderByAggregateInput | undefined;
    _max?: LikeMaxOrderByAggregateInput | undefined;
    _min?: LikeMinOrderByAggregateInput | undefined;
}
