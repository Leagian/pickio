"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsMinAggregate = class UserFollowsMinAggregate {
};
exports.UserFollowsMinAggregate = UserFollowsMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinAggregate.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinAggregate.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinAggregate.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsMinAggregate.prototype, "createdAt", void 0);
exports.UserFollowsMinAggregate = UserFollowsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserFollowsMinAggregate", {})
], UserFollowsMinAggregate);
