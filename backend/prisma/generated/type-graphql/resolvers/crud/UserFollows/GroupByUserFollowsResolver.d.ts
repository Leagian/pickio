import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserFollowsArgs } from "./args/GroupByUserFollowsArgs";
import { UserFollowsGroupBy } from "../../outputs/UserFollowsGroupBy";
export declare class GroupByUserFollowsResolver {
    groupByUserFollows(ctx: any, info: GraphQLResolveInfo, args: GroupByUserFollowsArgs): Promise<UserFollowsGroupBy[]>;
}
