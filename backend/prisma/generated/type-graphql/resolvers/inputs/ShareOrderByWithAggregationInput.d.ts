import { ShareCountOrderByAggregateInput } from "../inputs/ShareCountOrderByAggregateInput";
import { ShareMaxOrderByAggregateInput } from "../inputs/ShareMaxOrderByAggregateInput";
import { ShareMinOrderByAggregateInput } from "../inputs/ShareMinOrderByAggregateInput";
export declare class ShareOrderByWithAggregationInput {
    shareId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: ShareCountOrderByAggregateInput | undefined;
    _max?: ShareMaxOrderByAggregateInput | undefined;
    _min?: ShareMinOrderByAggregateInput | undefined;
}
