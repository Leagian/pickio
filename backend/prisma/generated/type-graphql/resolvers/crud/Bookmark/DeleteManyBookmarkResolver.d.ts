import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBookmarkArgs } from "./args/DeleteManyBookmarkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBookmarkResolver {
    deleteManyBookmark(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBookmarkArgs): Promise<AffectedRowsOutput>;
}
