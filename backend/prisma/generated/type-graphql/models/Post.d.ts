import { Prisma } from '@prisma/client';
import { Bookmark } from '../models/Bookmark';
import { Comment } from '../models/Comment';
import { Like } from '../models/Like';
import { Share } from '../models/Share';
import { User } from '../models/User';
import { PostCount } from '../resolvers/outputs/PostCount';
export declare class Post {
  postId: string;
  userId: string;
  content?: string | null;
  address?: string | null;
  location?: Prisma.JsonValue | null;
  images: string[];
  tags: string[];
  createdAt: Date;
  User?: User;
  comments?: Comment[];
  likes?: Like[];
  shares?: Share[];
  bookmarks?: Bookmark[];
  _count?: PostCount | null;
}
