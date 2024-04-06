import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { Share } from "../../../models/Share";
import { User } from "../../../models/User";
import { UserFollows } from "../../../models/UserFollows";
import { UserBookmarksArgs } from "./args/UserBookmarksArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingsArgs } from "./args/UserFollowingsArgs";
import { UserLikesArgs } from "./args/UserLikesArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserSharesArgs } from "./args/UserSharesArgs";
export declare class UserRelationsResolver {
    posts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserPostsArgs): Promise<Post[]>;
    comments(user: User, ctx: any, info: GraphQLResolveInfo, args: UserCommentsArgs): Promise<Comment[]>;
    likes(user: User, ctx: any, info: GraphQLResolveInfo, args: UserLikesArgs): Promise<Like[]>;
    shares(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSharesArgs): Promise<Share[]>;
    bookmarks(user: User, ctx: any, info: GraphQLResolveInfo, args: UserBookmarksArgs): Promise<Bookmark[]>;
    followers(user: User, ctx: any, info: GraphQLResolveInfo, args: UserFollowersArgs): Promise<UserFollows[]>;
    followings(user: User, ctx: any, info: GraphQLResolveInfo, args: UserFollowingsArgs): Promise<UserFollows[]>;
}
