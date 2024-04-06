import { Prisma } from "@prisma/client";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class PostGroupBy {
    postId: string;
    userId: string;
    content: string | null;
    address: string | null;
    location: Prisma.JsonValue | null;
    images: string[] | null;
    tags: string[] | null;
    createdAt: Date;
    _count: PostCountAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
