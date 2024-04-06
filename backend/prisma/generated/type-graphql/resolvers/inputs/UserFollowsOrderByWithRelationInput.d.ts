import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class UserFollowsOrderByWithRelationInput {
    UserFollowsId?: "asc" | "desc" | undefined;
    followerId?: "asc" | "desc" | undefined;
    followingId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    follower?: UserOrderByWithRelationInput | undefined;
    following?: UserOrderByWithRelationInput | undefined;
}
