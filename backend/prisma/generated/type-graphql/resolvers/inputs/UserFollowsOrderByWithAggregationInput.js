"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCountOrderByAggregateInput_1 = require("../inputs/UserFollowsCountOrderByAggregateInput");
const UserFollowsMaxOrderByAggregateInput_1 = require("../inputs/UserFollowsMaxOrderByAggregateInput");
const UserFollowsMinOrderByAggregateInput_1 = require("../inputs/UserFollowsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserFollowsOrderByWithAggregationInput = class UserFollowsOrderByWithAggregationInput {
};
exports.UserFollowsOrderByWithAggregationInput = UserFollowsOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithAggregationInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithAggregationInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithAggregationInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCountOrderByAggregateInput_1.UserFollowsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCountOrderByAggregateInput_1.UserFollowsCountOrderByAggregateInput)
], UserFollowsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsMaxOrderByAggregateInput_1.UserFollowsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsMaxOrderByAggregateInput_1.UserFollowsMaxOrderByAggregateInput)
], UserFollowsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsMinOrderByAggregateInput_1.UserFollowsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsMinOrderByAggregateInput_1.UserFollowsMinOrderByAggregateInput)
], UserFollowsOrderByWithAggregationInput.prototype, "_min", void 0);
exports.UserFollowsOrderByWithAggregationInput = UserFollowsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsOrderByWithAggregationInput", {})
], UserFollowsOrderByWithAggregationInput);
