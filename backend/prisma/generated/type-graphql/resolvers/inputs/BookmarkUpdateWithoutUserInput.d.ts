import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutBookmarksNestedInput } from "../inputs/PostUpdateOneRequiredWithoutBookmarksNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BookmarkUpdateWithoutUserInput {
    bookmarkId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneRequiredWithoutBookmarksNestedInput | undefined;
}
