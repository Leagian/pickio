"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserFollowsCountOrderByAggregateInput = class UserFollowsCountOrderByAggregateInput {
};
exports.UserFollowsCountOrderByAggregateInput = UserFollowsCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCountOrderByAggregateInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCountOrderByAggregateInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCountOrderByAggregateInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCountOrderByAggregateInput.prototype, "createdAt", void 0);
exports.UserFollowsCountOrderByAggregateInput = UserFollowsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCountOrderByAggregateInput", {})
], UserFollowsCountOrderByAggregateInput);
