import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserFollowsArgs } from "./args/UpsertOneUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class UpsertOneUserFollowsResolver {
    upsertOneUserFollows(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserFollowsArgs): Promise<UserFollows>;
}
