import type { GraphQLResolveInfo } from "graphql";
import { CreateManyUserFollowsArgs } from "./args/CreateManyUserFollowsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUserFollowsResolver {
    createManyUserFollows(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserFollowsArgs): Promise<AffectedRowsOutput>;
}
