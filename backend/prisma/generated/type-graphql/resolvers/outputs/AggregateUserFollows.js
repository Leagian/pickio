"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserFollows = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCountAggregate_1 = require("../outputs/UserFollowsCountAggregate");
const UserFollowsMaxAggregate_1 = require("../outputs/UserFollowsMaxAggregate");
const UserFollowsMinAggregate_1 = require("../outputs/UserFollowsMinAggregate");
let AggregateUserFollows = class AggregateUserFollows {
};
exports.AggregateUserFollows = AggregateUserFollows;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCountAggregate_1.UserFollowsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCountAggregate_1.UserFollowsCountAggregate)
], AggregateUserFollows.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsMinAggregate_1.UserFollowsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsMinAggregate_1.UserFollowsMinAggregate)
], AggregateUserFollows.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsMaxAggregate_1.UserFollowsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsMaxAggregate_1.UserFollowsMaxAggregate)
], AggregateUserFollows.prototype, "_max", void 0);
exports.AggregateUserFollows = AggregateUserFollows = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUserFollows", {})
], AggregateUserFollows);
