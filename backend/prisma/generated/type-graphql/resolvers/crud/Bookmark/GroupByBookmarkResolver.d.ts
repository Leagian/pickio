import type { GraphQLResolveInfo } from "graphql";
import { GroupByBookmarkArgs } from "./args/GroupByBookmarkArgs";
import { BookmarkGroupBy } from "../../outputs/BookmarkGroupBy";
export declare class GroupByBookmarkResolver {
    groupByBookmark(ctx: any, info: GraphQLResolveInfo, args: GroupByBookmarkArgs): Promise<BookmarkGroupBy[]>;
}
