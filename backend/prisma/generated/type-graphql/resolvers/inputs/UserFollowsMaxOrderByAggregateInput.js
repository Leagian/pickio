"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserFollowsMaxOrderByAggregateInput = class UserFollowsMaxOrderByAggregateInput {
};
exports.UserFollowsMaxOrderByAggregateInput = UserFollowsMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxOrderByAggregateInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxOrderByAggregateInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxOrderByAggregateInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMaxOrderByAggregateInput.prototype, "createdAt", void 0);
exports.UserFollowsMaxOrderByAggregateInput = UserFollowsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsMaxOrderByAggregateInput", {})
], UserFollowsMaxOrderByAggregateInput);
