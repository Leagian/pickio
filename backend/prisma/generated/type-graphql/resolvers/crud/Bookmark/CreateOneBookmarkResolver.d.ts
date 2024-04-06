import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBookmarkArgs } from "./args/CreateOneBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class CreateOneBookmarkResolver {
    createOneBookmark(ctx: any, info: GraphQLResolveInfo, args: CreateOneBookmarkArgs): Promise<Bookmark>;
}
