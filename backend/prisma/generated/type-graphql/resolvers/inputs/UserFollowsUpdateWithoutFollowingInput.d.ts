import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersNestedInput";
export declare class UserFollowsUpdateWithoutFollowingInput {
    UserFollowsId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput | undefined;
}
