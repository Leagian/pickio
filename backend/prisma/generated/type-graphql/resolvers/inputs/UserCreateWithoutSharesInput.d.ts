import { BookmarkCreateNestedManyWithoutUserInput } from "../inputs/BookmarkCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { UserFollowsCreateNestedManyWithoutFollowerInput } from "../inputs/UserFollowsCreateNestedManyWithoutFollowerInput";
import { UserFollowsCreateNestedManyWithoutFollowingInput } from "../inputs/UserFollowsCreateNestedManyWithoutFollowingInput";
export declare class UserCreateWithoutSharesInput {
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
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | undefined;
    followers?: UserFollowsCreateNestedManyWithoutFollowerInput | undefined;
    followings?: UserFollowsCreateNestedManyWithoutFollowingInput | undefined;
}
