import { Bookmark } from '../models/Bookmark';
import { Comment } from '../models/Comment';
import { Like } from '../models/Like';
import { Post } from '../models/Post';
import { Share } from '../models/Share';
import { UserFollows } from '../models/UserFollows';
import { UserCount } from '../resolvers/outputs/UserCount';
export declare class User {
  userId: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string | null;
  bio?: string | null;
  interests?: string | null;
  createdAt: Date;
  posts?: Post[];
  comments?: Comment[];
  likes?: Like[];
  shares?: Share[];
  bookmarks?: Bookmark[];
  followers?: UserFollows[];
  followings?: UserFollows[];
  _count?: UserCount | null;
}
