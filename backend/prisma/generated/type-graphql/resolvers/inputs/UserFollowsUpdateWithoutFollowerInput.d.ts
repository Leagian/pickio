import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFollowingsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingsNestedInput";
export declare class UserFollowsUpdateWithoutFollowerInput {
    UserFollowsId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    following?: UserUpdateOneRequiredWithoutFollowingsNestedInput | undefined;
}
