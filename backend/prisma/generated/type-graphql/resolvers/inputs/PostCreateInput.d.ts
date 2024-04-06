import { Prisma } from "@prisma/client";
import { BookmarkCreateNestedManyWithoutPostInput } from "../inputs/BookmarkCreateNestedManyWithoutPostInput";
import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { LikeCreateNestedManyWithoutPostInput } from "../inputs/LikeCreateNestedManyWithoutPostInput";
import { PostCreateimagesInput } from "../inputs/PostCreateimagesInput";
import { PostCreatetagsInput } from "../inputs/PostCreatetagsInput";
import { ShareCreateNestedManyWithoutPostInput } from "../inputs/ShareCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    postId?: string | undefined;
    content?: string | undefined;
    address?: string | undefined;
    location?: Prisma.InputJsonValue | undefined;
    images?: PostCreateimagesInput | undefined;
    tags?: PostCreatetagsInput | undefined;
    createdAt?: Date | undefined;
    User: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    likes?: LikeCreateNestedManyWithoutPostInput | undefined;
    shares?: ShareCreateNestedManyWithoutPostInput | undefined;
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | undefined;
}
