import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserFollowsArgs } from "./args/FindUniqueUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class FindUniqueUserFollowsResolver {
    findUniqueUserFollows(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserFollowsArgs): Promise<UserFollows | null>;
}
