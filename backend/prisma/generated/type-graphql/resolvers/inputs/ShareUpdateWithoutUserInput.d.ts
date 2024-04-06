import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutSharesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutSharesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShareUpdateWithoutUserInput {
    shareId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneRequiredWithoutSharesNestedInput | undefined;
}
