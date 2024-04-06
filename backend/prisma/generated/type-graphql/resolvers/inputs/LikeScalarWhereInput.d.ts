import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LikeScalarWhereInput {
    AND?: LikeScalarWhereInput[] | undefined;
    OR?: LikeScalarWhereInput[] | undefined;
    NOT?: LikeScalarWhereInput[] | undefined;
    likeId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
