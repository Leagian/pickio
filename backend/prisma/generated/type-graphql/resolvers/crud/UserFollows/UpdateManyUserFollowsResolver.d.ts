import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyUserFollowsArgs } from "./args/UpdateManyUserFollowsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUserFollowsResolver {
    updateManyUserFollows(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserFollowsArgs): Promise<AffectedRowsOutput>;
}
