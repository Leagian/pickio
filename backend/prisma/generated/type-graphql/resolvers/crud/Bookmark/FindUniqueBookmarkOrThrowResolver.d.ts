import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookmarkOrThrowArgs } from "./args/FindUniqueBookmarkOrThrowArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class FindUniqueBookmarkOrThrowResolver {
    getBookmark(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookmarkOrThrowArgs): Promise<Bookmark | null>;
}
