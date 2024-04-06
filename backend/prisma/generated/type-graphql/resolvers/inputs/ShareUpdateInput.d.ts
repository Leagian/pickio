import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutSharesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutSharesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSharesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutSharesNestedInput";
export declare class ShareUpdateInput {
    shareId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutSharesNestedInput | undefined;
    Post?: PostUpdateOneRequiredWithoutSharesNestedInput | undefined;
}
