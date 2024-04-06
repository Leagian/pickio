import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookmarkArgs } from "./args/FindUniqueBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class FindUniqueBookmarkResolver {
    bookmark(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookmarkArgs): Promise<Bookmark | null>;
}
