import { ShareOrderByWithRelationInput } from "../../../inputs/ShareOrderByWithRelationInput";
import { ShareWhereInput } from "../../../inputs/ShareWhereInput";
import { ShareWhereUniqueInput } from "../../../inputs/ShareWhereUniqueInput";
export declare class UserSharesArgs {
    where?: ShareWhereInput | undefined;
    orderBy?: ShareOrderByWithRelationInput[] | undefined;
    cursor?: ShareWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"shareId" | "postId" | "userId" | "createdAt"> | undefined;
}
