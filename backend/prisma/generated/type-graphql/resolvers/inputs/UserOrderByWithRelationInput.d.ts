import { BookmarkOrderByRelationAggregateInput } from "../inputs/BookmarkOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { LikeOrderByRelationAggregateInput } from "../inputs/LikeOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ShareOrderByRelationAggregateInput } from "../inputs/ShareOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserFollowsOrderByRelationAggregateInput } from "../inputs/UserFollowsOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    userId?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    profilePicture?: SortOrderInput | undefined;
    bio?: SortOrderInput | undefined;
    interests?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    likes?: LikeOrderByRelationAggregateInput | undefined;
    shares?: ShareOrderByRelationAggregateInput | undefined;
    bookmarks?: BookmarkOrderByRelationAggregateInput | undefined;
    followers?: UserFollowsOrderByRelationAggregateInput | undefined;
    followings?: UserFollowsOrderByRelationAggregateInput | undefined;
}
