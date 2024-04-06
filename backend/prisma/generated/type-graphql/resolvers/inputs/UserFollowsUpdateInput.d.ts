import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersNestedInput";
import { UserUpdateOneRequiredWithoutFollowingsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingsNestedInput";
export declare class UserFollowsUpdateInput {
    UserFollowsId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput | undefined;
    following?: UserUpdateOneRequiredWithoutFollowingsNestedInput | undefined;
}
