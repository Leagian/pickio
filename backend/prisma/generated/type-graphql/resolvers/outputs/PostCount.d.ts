import { PostCountBookmarksArgs } from "./args/PostCountBookmarksArgs";
import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";
import { PostCountLikesArgs } from "./args/PostCountLikesArgs";
import { PostCountSharesArgs } from "./args/PostCountSharesArgs";
export declare class PostCount {
    comments: number;
    likes: number;
    shares: number;
    bookmarks: number;
    getComments(root: PostCount, args: PostCountCommentsArgs): number;
    getLikes(root: PostCount, args: PostCountLikesArgs): number;
    getShares(root: PostCount, args: PostCountSharesArgs): number;
    getBookmarks(root: PostCount, args: PostCountBookmarksArgs): number;
}
