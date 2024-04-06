import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ShareScalarWhereWithAggregatesInput {
    AND?: ShareScalarWhereWithAggregatesInput[] | undefined;
    OR?: ShareScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ShareScalarWhereWithAggregatesInput[] | undefined;
    shareId?: StringWithAggregatesFilter | undefined;
    postId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
