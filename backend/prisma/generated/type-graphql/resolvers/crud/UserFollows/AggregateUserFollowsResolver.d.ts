import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserFollowsArgs } from "./args/AggregateUserFollowsArgs";
import { AggregateUserFollows } from "../../outputs/AggregateUserFollows";
export declare class AggregateUserFollowsResolver {
    aggregateUserFollows(ctx: any, info: GraphQLResolveInfo, args: AggregateUserFollowsArgs): Promise<AggregateUserFollows>;
}
