import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLikesNestedInput";
export declare class LikeUpdateWithoutPostInput {
    likeId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
