import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { Share } from "../../../models/Share";
import { User } from "../../../models/User";
import { PostBookmarksArgs } from "./args/PostBookmarksArgs";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostLikesArgs } from "./args/PostLikesArgs";
import { PostSharesArgs } from "./args/PostSharesArgs";
export declare class PostRelationsResolver {
    User(post: Post, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    comments(post: Post, ctx: any, info: GraphQLResolveInfo, args: PostCommentsArgs): Promise<Comment[]>;
    likes(post: Post, ctx: any, info: GraphQLResolveInfo, args: PostLikesArgs): Promise<Like[]>;
    shares(post: Post, ctx: any, info: GraphQLResolveInfo, args: PostSharesArgs): Promise<Share[]>;
    bookmarks(post: Post, ctx: any, info: GraphQLResolveInfo, args: PostBookmarksArgs): Promise<Bookmark[]>;
}
