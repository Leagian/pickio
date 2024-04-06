import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBookmarkArgs } from "./args/UpdateManyBookmarkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBookmarkResolver {
    updateManyBookmark(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBookmarkArgs): Promise<AffectedRowsOutput>;
}
