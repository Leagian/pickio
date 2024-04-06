import { UserCountBookmarksArgs } from "./args/UserCountBookmarksArgs";
import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountFollowersArgs } from "./args/UserCountFollowersArgs";
import { UserCountFollowingsArgs } from "./args/UserCountFollowingsArgs";
import { UserCountLikesArgs } from "./args/UserCountLikesArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
import { UserCountSharesArgs } from "./args/UserCountSharesArgs";
export declare class UserCount {
    posts: number;
    comments: number;
    likes: number;
    shares: number;
    bookmarks: number;
    followers: number;
    followings: number;
    getPosts(root: UserCount, args: UserCountPostsArgs): number;
    getComments(root: UserCount, args: UserCountCommentsArgs): number;
    getLikes(root: UserCount, args: UserCountLikesArgs): number;
    getShares(root: UserCount, args: UserCountSharesArgs): number;
    getBookmarks(root: UserCount, args: UserCountBookmarksArgs): number;
    getFollowers(root: UserCount, args: UserCountFollowersArgs): number;
    getFollowings(root: UserCount, args: UserCountFollowingsArgs): number;
}
