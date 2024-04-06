import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { ShareWhereInput } from "../inputs/ShareWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ShareWhereUniqueInput {
    shareId?: string | undefined;
    AND?: ShareWhereInput[] | undefined;
    OR?: ShareWhereInput[] | undefined;
    NOT?: ShareWhereInput[] | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    Post?: PostRelationFilter | undefined;
}
