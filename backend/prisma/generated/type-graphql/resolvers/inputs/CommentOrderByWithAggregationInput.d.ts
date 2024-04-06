import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
export declare class CommentOrderByWithAggregationInput {
    commentId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: CommentCountOrderByAggregateInput | undefined;
    _max?: CommentMaxOrderByAggregateInput | undefined;
    _min?: CommentMinOrderByAggregateInput | undefined;
}
