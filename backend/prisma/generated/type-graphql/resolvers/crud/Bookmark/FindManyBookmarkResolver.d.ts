import type { GraphQLResolveInfo } from "graphql";
import { FindManyBookmarkArgs } from "./args/FindManyBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class FindManyBookmarkResolver {
    bookmarks(ctx: any, info: GraphQLResolveInfo, args: FindManyBookmarkArgs): Promise<Bookmark[]>;
}
