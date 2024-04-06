import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PostOrderByWithAggregationInput {
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    content?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    location?: SortOrderInput | undefined;
    images?: "asc" | "desc" | undefined;
    tags?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: PostCountOrderByAggregateInput | undefined;
    _max?: PostMaxOrderByAggregateInput | undefined;
    _min?: PostMinOrderByAggregateInput | undefined;
}
