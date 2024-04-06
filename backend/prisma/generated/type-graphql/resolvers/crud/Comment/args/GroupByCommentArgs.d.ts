import { CommentOrderByWithAggregationInput } from "../../../inputs/CommentOrderByWithAggregationInput";
import { CommentScalarWhereWithAggregatesInput } from "../../../inputs/CommentScalarWhereWithAggregatesInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
export declare class GroupByCommentArgs {
    where?: CommentWhereInput | undefined;
    orderBy?: CommentOrderByWithAggregationInput[] | undefined;
    by: Array<"commentId" | "postId" | "userId" | "content" | "createdAt">;
    having?: CommentScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
