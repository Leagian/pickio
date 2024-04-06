import { User } from '../models/User';
export declare class UserFollows {
  UserFollowsId: string;
  followerId: string;
  followingId: string;
  follower?: User;
  following?: User;
  createdAt: Date;
}
