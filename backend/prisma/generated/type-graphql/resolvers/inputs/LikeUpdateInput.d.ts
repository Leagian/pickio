import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutLikesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLikesNestedInput";
export declare class LikeUpdateInput {
    likeId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutLikesNestedInput | undefined;
    Post?: PostUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
