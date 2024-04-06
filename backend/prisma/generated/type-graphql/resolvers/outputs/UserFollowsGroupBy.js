"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCountAggregate_1 = require("../outputs/UserFollowsCountAggregate");
const UserFollowsMaxAggregate_1 = require("../outputs/UserFollowsMaxAggregate");
const UserFollowsMinAggregate_1 = require("../outputs/UserFollowsMinAggregate");
let UserFollowsGroupBy = class UserFollowsGroupBy {
};
exports.UserFollowsGroupBy = UserFollowsGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsGroupBy.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsGroupBy.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsGroupBy.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCountAggregate_1.UserFollowsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCountAggregate_1.UserFollowsCountAggregate)
], UserFollowsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsMinAggregate_1.UserFollowsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsMinAggregate_1.UserFollowsMinAggregate)
], UserFollowsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsMaxAggregate_1.UserFollowsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsMaxAggregate_1.UserFollowsMaxAggregate)
], UserFollowsGroupBy.prototype, "_max", void 0);
exports.UserFollowsGroupBy = UserFollowsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserFollowsGroupBy", {})
], UserFollowsGroupBy);
