import { UserFollowsCountOrderByAggregateInput } from "../inputs/UserFollowsCountOrderByAggregateInput";
import { UserFollowsMaxOrderByAggregateInput } from "../inputs/UserFollowsMaxOrderByAggregateInput";
import { UserFollowsMinOrderByAggregateInput } from "../inputs/UserFollowsMinOrderByAggregateInput";
export declare class UserFollowsOrderByWithAggregationInput {
    UserFollowsId?: "asc" | "desc" | undefined;
    followerId?: "asc" | "desc" | undefined;
    followingId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: UserFollowsCountOrderByAggregateInput | undefined;
    _max?: UserFollowsMaxOrderByAggregateInput | undefined;
    _min?: UserFollowsMinOrderByAggregateInput | undefined;
}
