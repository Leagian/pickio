import { LikeOrderByWithAggregationInput } from "../../../inputs/LikeOrderByWithAggregationInput";
import { LikeScalarWhereWithAggregatesInput } from "../../../inputs/LikeScalarWhereWithAggregatesInput";
import { LikeWhereInput } from "../../../inputs/LikeWhereInput";
export declare class GroupByLikeArgs {
    where?: LikeWhereInput | undefined;
    orderBy?: LikeOrderByWithAggregationInput[] | undefined;
    by: Array<"likeId" | "postId" | "userId" | "createdAt">;
    having?: LikeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
