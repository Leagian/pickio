import { BookmarkUpdateManyWithoutUserNestedInput } from "../inputs/BookmarkUpdateManyWithoutUserNestedInput";
import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutUserNestedInput } from "../inputs/LikeUpdateManyWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ShareUpdateManyWithoutUserNestedInput } from "../inputs/ShareUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserFollowsUpdateManyWithoutFollowerNestedInput } from "../inputs/UserFollowsUpdateManyWithoutFollowerNestedInput";
import { UserFollowsUpdateManyWithoutFollowingNestedInput } from "../inputs/UserFollowsUpdateManyWithoutFollowingNestedInput";
export declare class UserUpdateWithoutPostsInput {
    userId?: StringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    profilePicture?: NullableStringFieldUpdateOperationsInput | undefined;
    bio?: NullableStringFieldUpdateOperationsInput | undefined;
    interests?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    comments?: CommentUpdateManyWithoutUserNestedInput | undefined;
    likes?: LikeUpdateManyWithoutUserNestedInput | undefined;
    shares?: ShareUpdateManyWithoutUserNestedInput | undefined;
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | undefined;
    followers?: UserFollowsUpdateManyWithoutFollowerNestedInput | undefined;
    followings?: UserFollowsUpdateManyWithoutFollowingNestedInput | undefined;
}