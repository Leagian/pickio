import { UserFollowsOrderByWithRelationInput } from "../../../inputs/UserFollowsOrderByWithRelationInput";
import { UserFollowsWhereInput } from "../../../inputs/UserFollowsWhereInput";
import { UserFollowsWhereUniqueInput } from "../../../inputs/UserFollowsWhereUniqueInput";
export declare class AggregateUserFollowsArgs {
    where?: UserFollowsWhereInput | undefined;
    orderBy?: UserFollowsOrderByWithRelationInput[] | undefined;
    cursor?: UserFollowsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
