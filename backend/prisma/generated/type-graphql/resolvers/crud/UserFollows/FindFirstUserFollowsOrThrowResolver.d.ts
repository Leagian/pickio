import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserFollowsOrThrowArgs } from "./args/FindFirstUserFollowsOrThrowArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class FindFirstUserFollowsOrThrowResolver {
    findFirstUserFollowsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserFollowsOrThrowArgs): Promise<UserFollows | null>;
}
