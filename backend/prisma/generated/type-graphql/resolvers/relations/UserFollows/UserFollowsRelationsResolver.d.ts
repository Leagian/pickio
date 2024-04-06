import type { GraphQLResolveInfo } from "graphql";
import { User } from "../../../models/User";
import { UserFollows } from "../../../models/UserFollows";
export declare class UserFollowsRelationsResolver {
    follower(userFollows: UserFollows, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    following(userFollows: UserFollows, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
