import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserFollowsArgs } from "./args/DeleteOneUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class DeleteOneUserFollowsResolver {
    deleteOneUserFollows(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserFollowsArgs): Promise<UserFollows | null>;
}
