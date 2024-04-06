import { UserFollowsOrderByWithAggregationInput } from "../../../inputs/UserFollowsOrderByWithAggregationInput";
import { UserFollowsScalarWhereWithAggregatesInput } from "../../../inputs/UserFollowsScalarWhereWithAggregatesInput";
import { UserFollowsWhereInput } from "../../../inputs/UserFollowsWhereInput";
export declare class GroupByUserFollowsArgs {
    where?: UserFollowsWhereInput | undefined;
    orderBy?: UserFollowsOrderByWithAggregationInput[] | undefined;
    by: Array<"UserFollowsId" | "followerId" | "followingId" | "createdAt">;
    having?: UserFollowsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
