import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBookmarkArgs } from "./args/DeleteOneBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class DeleteOneBookmarkResolver {
    deleteOneBookmark(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBookmarkArgs): Promise<Bookmark | null>;
}
