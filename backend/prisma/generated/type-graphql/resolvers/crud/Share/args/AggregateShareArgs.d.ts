import { ShareOrderByWithRelationInput } from "../../../inputs/ShareOrderByWithRelationInput";
import { ShareWhereInput } from "../../../inputs/ShareWhereInput";
import { ShareWhereUniqueInput } from "../../../inputs/ShareWhereUniqueInput";
export declare class AggregateShareArgs {
    where?: ShareWhereInput | undefined;
    orderBy?: ShareOrderByWithRelationInput[] | undefined;
    cursor?: ShareWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
