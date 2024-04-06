import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBookmarkArgs } from "./args/UpsertOneBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class UpsertOneBookmarkResolver {
    upsertOneBookmark(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBookmarkArgs): Promise<Bookmark>;
}
