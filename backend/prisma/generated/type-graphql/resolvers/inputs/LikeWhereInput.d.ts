import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class LikeWhereInput {
    AND?: LikeWhereInput[] | undefined;
    OR?: LikeWhereInput[] | undefined;
    NOT?: LikeWhereInput[] | undefined;
    likeId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    Post?: PostRelationFilter | undefined;
}
