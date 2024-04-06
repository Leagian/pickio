import { UserFollowsCountAggregate } from "../outputs/UserFollowsCountAggregate";
import { UserFollowsMaxAggregate } from "../outputs/UserFollowsMaxAggregate";
import { UserFollowsMinAggregate } from "../outputs/UserFollowsMinAggregate";
export declare class AggregateUserFollows {
    _count: UserFollowsCountAggregate | null;
    _min: UserFollowsMinAggregate | null;
    _max: UserFollowsMaxAggregate | null;
}
