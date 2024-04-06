import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutBookmarksNestedInput } from "../inputs/PostUpdateOneRequiredWithoutBookmarksNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookmarksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookmarksNestedInput";
export declare class BookmarkUpdateInput {
    bookmarkId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutBookmarksNestedInput | undefined;
    Post?: PostUpdateOneRequiredWithoutBookmarksNestedInput | undefined;
}
