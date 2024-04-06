import { CommentCreateManyPostInputEnvelope } from "../inputs/CommentCreateManyPostInputEnvelope";
import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutPostInput {
    create?: CommentCreateWithoutPostInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: CommentCreateManyPostInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
