import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserFollowsArgs } from "./args/FindFirstUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class FindFirstUserFollowsResolver {
    findFirstUserFollows(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserFollowsArgs): Promise<UserFollows | null>;
}
