import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBookmarkArgs } from "./args/CreateManyBookmarkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBookmarkResolver {
    createManyBookmark(ctx: any, info: GraphQLResolveInfo, args: CreateManyBookmarkArgs): Promise<AffectedRowsOutput>;
}
