import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookmarksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookmarksNestedInput";
export declare class BookmarkUpdateWithoutPostInput {
    bookmarkId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutBookmarksNestedInput | undefined;
}
