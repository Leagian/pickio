import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserFollowsFollowerIdFollowingIdCompoundUniqueInput } from "../inputs/UserFollowsFollowerIdFollowingIdCompoundUniqueInput";
import { UserFollowsWhereInput } from "../inputs/UserFollowsWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class UserFollowsWhereUniqueInput {
    UserFollowsId?: string | undefined;
    followerId_followingId?: UserFollowsFollowerIdFollowingIdCompoundUniqueInput | undefined;
    AND?: UserFollowsWhereInput[] | undefined;
    OR?: UserFollowsWhereInput[] | undefined;
    NOT?: UserFollowsWhereInput[] | undefined;
    followerId?: StringFilter | undefined;
    followingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    follower?: UserRelationFilter | undefined;
    following?: UserRelationFilter | undefined;
}
