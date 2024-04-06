import { BookmarkCreateManyUserInputEnvelope } from "../inputs/BookmarkCreateManyUserInputEnvelope";
import { BookmarkCreateOrConnectWithoutUserInput } from "../inputs/BookmarkCreateOrConnectWithoutUserInput";
import { BookmarkCreateWithoutUserInput } from "../inputs/BookmarkCreateWithoutUserInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutUserInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutUserInput";
import { BookmarkUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutUserInput";
import { BookmarkUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";
export declare class BookmarkUpdateManyWithoutUserNestedInput {
    create?: BookmarkCreateWithoutUserInput[] | undefined;
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: BookmarkCreateManyUserInputEnvelope | undefined;
    set?: BookmarkWhereUniqueInput[] | undefined;
    disconnect?: BookmarkWhereUniqueInput[] | undefined;
    delete?: BookmarkWhereUniqueInput[] | undefined;
    connect?: BookmarkWhereUniqueInput[] | undefined;
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
