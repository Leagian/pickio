import { ShareCountAggregate } from "../outputs/ShareCountAggregate";
import { ShareMaxAggregate } from "../outputs/ShareMaxAggregate";
import { ShareMinAggregate } from "../outputs/ShareMinAggregate";
export declare class ShareGroupBy {
    shareId: string;
    postId: string;
    userId: string;
    createdAt: Date;
    _count: ShareCountAggregate | null;
    _min: ShareMinAggregate | null;
    _max: ShareMaxAggregate | null;
}
