import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSharesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutSharesNestedInput";
export declare class ShareUpdateWithoutPostInput {
    shareId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutSharesNestedInput | undefined;
}
