import { Post } from "../models/Post";
import { User } from "../models/User";
export declare class Share {
    shareId: string;
    postId: string;
    userId: string;
    createdAt: Date;
    User?: User;
    Post?: Post;
}
