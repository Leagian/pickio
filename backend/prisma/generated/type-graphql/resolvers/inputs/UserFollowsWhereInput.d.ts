import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class UserFollowsWhereInput {
    AND?: UserFollowsWhereInput[] | undefined;
    OR?: UserFollowsWhereInput[] | undefined;
    NOT?: UserFollowsWhereInput[] | undefined;
    UserFollowsId?: StringFilter | undefined;
    followerId?: StringFilter | undefined;
    followingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    follower?: UserRelationFilter | undefined;
    following?: UserRelationFilter | undefined;
}
