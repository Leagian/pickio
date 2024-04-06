import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserFollowsArgs } from "./args/UpdateOneUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class UpdateOneUserFollowsResolver {
    updateOneUserFollows(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserFollowsArgs): Promise<UserFollows | null>;
}
