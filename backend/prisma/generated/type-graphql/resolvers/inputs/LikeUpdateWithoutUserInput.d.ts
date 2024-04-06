import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutLikesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LikeUpdateWithoutUserInput {
    likeId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
