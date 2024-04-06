import { Post } from "../models/Post";
import { User } from "../models/User";
export declare class Bookmark {
    bookmarkId: string;
    postId: string;
    userId: string;
    createdAt: Date;
    User?: User;
    Post?: Post;
}
