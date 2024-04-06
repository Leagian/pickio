import { BookmarkCountAggregate } from "../outputs/BookmarkCountAggregate";
import { BookmarkMaxAggregate } from "../outputs/BookmarkMaxAggregate";
import { BookmarkMinAggregate } from "../outputs/BookmarkMinAggregate";
export declare class AggregateBookmark {
    _count: BookmarkCountAggregate | null;
    _min: BookmarkMinAggregate | null;
    _max: BookmarkMaxAggregate | null;
}
