import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserFollowsArgs } from "./args/CreateOneUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class CreateOneUserFollowsResolver {
    createOneUserFollows(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserFollowsArgs): Promise<UserFollows>;
}
