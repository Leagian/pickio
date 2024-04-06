import { Prisma } from "@prisma/client";
import { BookmarkUpdateManyWithoutPostNestedInput } from "../inputs/BookmarkUpdateManyWithoutPostNestedInput";
import { CommentUpdateManyWithoutPostNestedInput } from "../inputs/CommentUpdateManyWithoutPostNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutPostNestedInput } from "../inputs/LikeUpdateManyWithoutPostNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateimagesInput } from "../inputs/PostUpdateimagesInput";
import { PostUpdatetagsInput } from "../inputs/PostUpdatetagsInput";
import { ShareUpdateManyWithoutPostNestedInput } from "../inputs/ShareUpdateManyWithoutPostNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateWithoutUserInput {
    postId?: StringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    location?: Prisma.InputJsonValue | undefined;
    images?: PostUpdateimagesInput | undefined;
    tags?: PostUpdatetagsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    comments?: CommentUpdateManyWithoutPostNestedInput | undefined;
    likes?: LikeUpdateManyWithoutPostNestedInput | undefined;
    shares?: ShareUpdateManyWithoutPostNestedInput | undefined;
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | undefined;
}
