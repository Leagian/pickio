import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBookmarkArgs } from "./args/UpdateOneBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class UpdateOneBookmarkResolver {
    updateOneBookmark(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBookmarkArgs): Promise<Bookmark | null>;
}
