import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserFollowsScalarWhereWithAggregatesInput {
    AND?: UserFollowsScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserFollowsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserFollowsScalarWhereWithAggregatesInput[] | undefined;
    UserFollowsId?: StringWithAggregatesFilter | undefined;
    followerId?: StringWithAggregatesFilter | undefined;
    followingId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
