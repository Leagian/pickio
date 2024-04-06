import { ShareCountAggregate } from "../outputs/ShareCountAggregate";
import { ShareMaxAggregate } from "../outputs/ShareMaxAggregate";
import { ShareMinAggregate } from "../outputs/ShareMinAggregate";
export declare class AggregateShare {
    _count: ShareCountAggregate | null;
    _min: ShareMinAggregate | null;
    _max: ShareMaxAggregate | null;
}
