import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateimagesInput } from "../inputs/PostUpdateimagesInput";
import { PostUpdatetagsInput } from "../inputs/PostUpdatetagsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateManyMutationInput {
    postId?: StringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    location?: Prisma.InputJsonValue | undefined;
    images?: PostUpdateimagesInput | undefined;
    tags?: PostUpdatetagsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
