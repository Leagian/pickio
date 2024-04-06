import { BookmarkCountOrderByAggregateInput } from "../inputs/BookmarkCountOrderByAggregateInput";
import { BookmarkMaxOrderByAggregateInput } from "../inputs/BookmarkMaxOrderByAggregateInput";
import { BookmarkMinOrderByAggregateInput } from "../inputs/BookmarkMinOrderByAggregateInput";
export declare class BookmarkOrderByWithAggregationInput {
    bookmarkId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: BookmarkCountOrderByAggregateInput | undefined;
    _max?: BookmarkMaxOrderByAggregateInput | undefined;
    _min?: BookmarkMinOrderByAggregateInput | undefined;
}
