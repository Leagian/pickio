import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookmarkArgs } from "./args/FindFirstBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class FindFirstBookmarkResolver {
    findFirstBookmark(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookmarkArgs): Promise<Bookmark | null>;
}
