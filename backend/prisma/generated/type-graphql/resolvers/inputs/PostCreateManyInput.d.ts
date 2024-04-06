import { Prisma } from "@prisma/client";
import { PostCreateimagesInput } from "../inputs/PostCreateimagesInput";
import { PostCreatetagsInput } from "../inputs/PostCreatetagsInput";
export declare class PostCreateManyInput {
    postId?: string | undefined;
    userId: string;
    content?: string | undefined;
    address?: string | undefined;
    location?: Prisma.InputJsonValue | undefined;
    images?: PostCreateimagesInput | undefined;
    tags?: PostCreatetagsInput | undefined;
    createdAt?: Date | undefined;
}