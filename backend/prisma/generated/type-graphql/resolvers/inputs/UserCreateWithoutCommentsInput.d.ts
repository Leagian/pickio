import { BookmarkCreateNestedManyWithoutUserInput } from "../inputs/BookmarkCreateNestedManyWithoutUserInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { ShareCreateNestedManyWithoutUserInput } from "../inputs/ShareCreateNestedManyWithoutUserInput";
import { UserFollowsCreateNestedManyWithoutFollowerInput } from "../inputs/UserFollowsCreateNestedManyWithoutFollowerInput";
import { UserFollowsCreateNestedManyWithoutFollowingInput } from "../inputs/UserFollowsCreateNestedManyWithoutFollowingInput";
export declare class UserCreateWithoutCommentsInput {
    userId?: string | undefined;
    username: string;
    email: string;
    password: string;
    profilePicture?: string | undefined;
    bio?: string | undefined;
    interests?: string | undefined;
    createdAt?: Date | undefined;
    posts?: PostCreateNestedManyWithoutUserInput | undefined;
    likes?: LikeCreateNestedManyWithoutUserInput | undefined;
    shares?: ShareCreateNestedManyWithoutUserInput | undefined;
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | undefined;
    followers?: UserFollowsCreateNestedManyWithoutFollowerInput | undefined;
    followings?: UserFollowsCreateNestedManyWithoutFollowingInput | undefined;
}
