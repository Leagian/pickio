import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserFollowsOrThrowArgs } from "./args/FindUniqueUserFollowsOrThrowArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class FindUniqueUserFollowsOrThrowResolver {
    findUniqueUserFollowsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserFollowsOrThrowArgs): Promise<UserFollows | null>;
}
