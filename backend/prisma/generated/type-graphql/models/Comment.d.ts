import { Post } from "../models/Post";
import { User } from "../models/User";
export declare class Comment {
    commentId: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: Date;
    User?: User;
    Post?: Post;
}
