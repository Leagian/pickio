import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserFollowsScalarWhereInput {
    AND?: UserFollowsScalarWhereInput[] | undefined;
    OR?: UserFollowsScalarWhereInput[] | undefined;
    NOT?: UserFollowsScalarWhereInput[] | undefined;
    UserFollowsId?: StringFilter | undefined;
    followerId?: StringFilter | undefined;
    followingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
