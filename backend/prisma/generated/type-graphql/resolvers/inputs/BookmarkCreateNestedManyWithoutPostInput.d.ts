import { BookmarkCreateManyPostInputEnvelope } from "../inputs/BookmarkCreateManyPostInputEnvelope";
import { BookmarkCreateOrConnectWithoutPostInput } from "../inputs/BookmarkCreateOrConnectWithoutPostInput";
import { BookmarkCreateWithoutPostInput } from "../inputs/BookmarkCreateWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";
export declare class BookmarkCreateNestedManyWithoutPostInput {
    create?: BookmarkCreateWithoutPostInput[] | undefined;
    connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: BookmarkCreateManyPostInputEnvelope | undefined;
    connect?: BookmarkWhereUniqueInput[] | undefined;
}
