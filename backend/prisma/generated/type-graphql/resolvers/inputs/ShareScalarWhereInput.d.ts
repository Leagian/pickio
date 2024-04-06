import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ShareScalarWhereInput {
    AND?: ShareScalarWhereInput[] | undefined;
    OR?: ShareScalarWhereInput[] | undefined;
    NOT?: ShareScalarWhereInput[] | undefined;
    shareId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
