import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
export declare class BookmarkRelationsResolver {
    User(bookmark: Bookmark, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    Post(bookmark: Bookmark, ctx: any, info: GraphQLResolveInfo): Promise<Post>;
}
