import { BookmarkCreateNestedManyWithoutUserInput } from "../inputs/BookmarkCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { ShareCreateNestedManyWithoutUserInput } from "../inputs/ShareCreateNestedManyWithoutUserInput";
import { UserFollowsCreateNestedManyWithoutFollowingInput } from "../inputs/UserFollowsCreateNestedManyWithoutFollowingInput";
export declare class UserCreateWithoutFollowersInput {
    userId?: string | undefined;
    username: string;
    email: string;
    password: string;
    profilePicture?: string | undefined;
    bio?: string | undefined;
    interests?: string | undefined;
    createdAt?: Date | undefined;
    posts?: PostCreateNestedManyWithoutUserInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    likes?: LikeCreateNestedManyWithoutUserInput | undefined;
    shares?: ShareCreateNestedManyWithoutUserInput | undefined;
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | undefined;
    followings?: UserFollowsCreateNestedManyWithoutFollowingInput | undefined;
}
