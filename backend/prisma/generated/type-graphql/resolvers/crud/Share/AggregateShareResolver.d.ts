import type { GraphQLResolveInfo } from "graphql";
import { AggregateShareArgs } from "./args/AggregateShareArgs";
import { AggregateShare } from "../../outputs/AggregateShare";
export declare class AggregateShareResolver {
    aggregateShare(ctx: any, info: GraphQLResolveInfo, args: AggregateShareArgs): Promise<AggregateShare>;
}
