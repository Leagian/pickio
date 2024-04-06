import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CommentWhereInput {
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    commentId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    content?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    Post?: PostRelationFilter | undefined;
}
