import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookmarkArgs } from "./args/AggregateBookmarkArgs";
import { AggregateBookmark } from "../../outputs/AggregateBookmark";
export declare class AggregateBookmarkResolver {
    aggregateBookmark(ctx: any, info: GraphQLResolveInfo, args: AggregateBookmarkArgs): Promise<AggregateBookmark>;
}
