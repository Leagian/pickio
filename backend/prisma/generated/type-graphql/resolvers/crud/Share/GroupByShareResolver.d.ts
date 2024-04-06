import type { GraphQLResolveInfo } from "graphql";
import { GroupByShareArgs } from "./args/GroupByShareArgs";
import { ShareGroupBy } from "../../outputs/ShareGroupBy";
export declare class GroupByShareResolver {
    groupByShare(ctx: any, info: GraphQLResolveInfo, args: GroupByShareArgs): Promise<ShareGroupBy[]>;
}
