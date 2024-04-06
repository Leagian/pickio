import type { GraphQLResolveInfo } from "graphql";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
export declare class LikeRelationsResolver {
    User(like: Like, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    Post(like: Like, ctx: any, info: GraphQLResolveInfo): Promise<Post>;
}
