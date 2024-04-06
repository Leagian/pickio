import { BookmarkCreateManyPostInputEnvelope } from "../inputs/BookmarkCreateManyPostInputEnvelope";
import { BookmarkCreateOrConnectWithoutPostInput } from "../inputs/BookmarkCreateOrConnectWithoutPostInput";
import { BookmarkCreateWithoutPostInput } from "../inputs/BookmarkCreateWithoutPostInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutPostInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutPostInput";
import { BookmarkUpdateWithWhereUniqueWithoutPostInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutPostInput";
import { BookmarkUpsertWithWhereUniqueWithoutPostInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";
export declare class BookmarkUpdateManyWithoutPostNestedInput {
    create?: BookmarkCreateWithoutPostInput[] | undefined;
    connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: BookmarkUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: BookmarkCreateManyPostInputEnvelope | undefined;
    set?: BookmarkWhereUniqueInput[] | undefined;
    disconnect?: BookmarkWhereUniqueInput[] | undefined;
    delete?: BookmarkWhereUniqueInput[] | undefined;
    connect?: BookmarkWhereUniqueInput[] | undefined;
    update?: BookmarkUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: BookmarkUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
