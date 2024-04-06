import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LikeScalarWhereWithAggregatesInput {
    AND?: LikeScalarWhereWithAggregatesInput[] | undefined;
    OR?: LikeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LikeScalarWhereWithAggregatesInput[] | undefined;
    likeId?: StringWithAggregatesFilter | undefined;
    postId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
