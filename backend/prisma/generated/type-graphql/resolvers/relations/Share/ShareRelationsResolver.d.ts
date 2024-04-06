import type { GraphQLResolveInfo } from "graphql";
import { Post } from "../../../models/Post";
import { Share } from "../../../models/Share";
import { User } from "../../../models/User";
export declare class ShareRelationsResolver {
    User(share: Share, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    Post(share: Share, ctx: any, info: GraphQLResolveInfo): Promise<Post>;
}
