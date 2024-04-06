"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserFollowsOrderByWithRelationInput = class UserFollowsOrderByWithRelationInput {
};
exports.UserFollowsOrderByWithRelationInput = UserFollowsOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithRelationInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithRelationInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithRelationInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], UserFollowsOrderByWithRelationInput.prototype, "follower", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], UserFollowsOrderByWithRelationInput.prototype, "following", void 0);
exports.UserFollowsOrderByWithRelationInput = UserFollowsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsOrderByWithRelationInput", {})
], UserFollowsOrderByWithRelationInput);
