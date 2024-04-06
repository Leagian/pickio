import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookmarkOrThrowArgs } from "./args/FindFirstBookmarkOrThrowArgs";
import { Bookmark } from "../../../models/Bookmark";
export declare class FindFirstBookmarkOrThrowResolver {
    findFirstBookmarkOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookmarkOrThrowArgs): Promise<Bookmark | null>;
}
