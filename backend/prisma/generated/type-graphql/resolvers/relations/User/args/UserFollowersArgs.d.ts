import { UserFollowsOrderByWithRelationInput } from "../../../inputs/UserFollowsOrderByWithRelationInput";
import { UserFollowsWhereInput } from "../../../inputs/UserFollowsWhereInput";
import { UserFollowsWhereUniqueInput } from "../../../inputs/UserFollowsWhereUniqueInput";
export declare class UserFollowersArgs {
    where?: UserFollowsWhereInput | undefined;
    orderBy?: UserFollowsOrderByWithRelationInput[] | undefined;
    cursor?: UserFollowsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"UserFollowsId" | "followerId" | "followingId" | "createdAt"> | undefined;
}
