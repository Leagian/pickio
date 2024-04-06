import { BookmarkCreateManyUserInputEnvelope } from "../inputs/BookmarkCreateManyUserInputEnvelope";
import { BookmarkCreateOrConnectWithoutUserInput } from "../inputs/BookmarkCreateOrConnectWithoutUserInput";
import { BookmarkCreateWithoutUserInput } from "../inputs/BookmarkCreateWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";
export declare class BookmarkCreateNestedManyWithoutUserInput {
    create?: BookmarkCreateWithoutUserInput[] | undefined;
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: BookmarkCreateManyUserInputEnvelope | undefined;
    connect?: BookmarkWhereUniqueInput[] | undefined;
}
