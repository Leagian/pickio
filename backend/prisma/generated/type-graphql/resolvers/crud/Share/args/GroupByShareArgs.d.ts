import { ShareOrderByWithAggregationInput } from "../../../inputs/ShareOrderByWithAggregationInput";
import { ShareScalarWhereWithAggregatesInput } from "../../../inputs/ShareScalarWhereWithAggregatesInput";
import { ShareWhereInput } from "../../../inputs/ShareWhereInput";
export declare class GroupByShareArgs {
    where?: ShareWhereInput | undefined;
    orderBy?: ShareOrderByWithAggregationInput[] | undefined;
    by: Array<"shareId" | "postId" | "userId" | "createdAt">;
    having?: ShareScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
