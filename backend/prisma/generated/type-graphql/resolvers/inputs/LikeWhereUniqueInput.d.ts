import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LikeWhereInput } from "../inputs/LikeWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class LikeWhereUniqueInput {
    likeId?: string | undefined;
    AND?: LikeWhereInput[] | undefined;
    OR?: LikeWhereInput[] | undefined;
    NOT?: LikeWhereInput[] | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    Post?: PostRelationFilter | undefined;
}
