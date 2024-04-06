import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyUserFollowsArgs } from "./args/DeleteManyUserFollowsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUserFollowsResolver {
    deleteManyUserFollows(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserFollowsArgs): Promise<AffectedRowsOutput>;
}
