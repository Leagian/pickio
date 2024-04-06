"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsCountAggregate = class UserFollowsCountAggregate {
};
exports.UserFollowsCountAggregate = UserFollowsCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserFollowsCountAggregate.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserFollowsCountAggregate.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserFollowsCountAggregate.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserFollowsCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserFollowsCountAggregate.prototype, "_all", void 0);
exports.UserFollowsCountAggregate = UserFollowsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserFollowsCountAggregate", {})
], UserFollowsCountAggregate);
