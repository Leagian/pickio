"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsMaxAggregate = class UserFollowsMaxAggregate {
};
exports.UserFollowsMaxAggregate = UserFollowsMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxAggregate.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxAggregate.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxAggregate.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsMaxAggregate.prototype, "createdAt", void 0);
exports.UserFollowsMaxAggregate = UserFollowsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserFollowsMaxAggregate", {})
], UserFollowsMaxAggregate);
