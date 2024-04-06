import type { GraphQLResolveInfo } from "graphql";
import { FindManyUserFollowsArgs } from "./args/FindManyUserFollowsArgs";
import { UserFollows } from "../../../models/UserFollows";
export declare class FindManyUserFollowsResolver {
    findManyUserFollows(ctx: any, info: GraphQLResolveInfo, args: FindManyUserFollowsArgs): Promise<UserFollows[]>;
}
