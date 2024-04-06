import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutUserNestedInput } from "../inputs/LikeUpdateManyWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutUserNestedInput } from "../inputs/PostUpdateManyWithoutUserNestedInput";
import { ShareUpdateManyWithoutUserNestedInput } from "../inputs/ShareUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserFollowsUpdateManyWithoutFollowerNestedInput } from "../inputs/UserFollowsUpdateManyWithoutFollowerNestedInput";
import { UserFollowsUpdateManyWithoutFollowingNestedInput } from "../inputs/UserFollowsUpdateManyWithoutFollowingNestedInput";
export declare class UserUpdateWithoutBookmarksInput {
    userId?: StringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    profilePicture?: NullableStringFieldUpdateOperationsInput | undefined;
    bio?: NullableStringFieldUpdateOperationsInput | undefined;
    interests?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    posts?: PostUpdateManyWithoutUserNestedInput | undefined;
    comments?: CommentUpdateManyWithoutUserNestedInput | undefined;
    likes?: LikeUpdateManyWithoutUserNestedInput | undefined;
    shares?: ShareUpdateManyWithoutUserNestedInput | undefined;
    followers?: UserFollowsUpdateManyWithoutFollowerNestedInput | undefined;
    followings?: UserFollowsUpdateManyWithoutFollowingNestedInput | undefined;
}
