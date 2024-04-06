"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserFollowsMinOrderByAggregateInput = class UserFollowsMinOrderByAggregateInput {
};
exports.UserFollowsMinOrderByAggregateInput = UserFollowsMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinOrderByAggregateInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinOrderByAggregateInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinOrderByAggregateInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsMinOrderByAggregateInput.prototype, "createdAt", void 0);
exports.UserFollowsMinOrderByAggregateInput = UserFollowsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsMinOrderByAggregateInput", {})
], UserFollowsMinOrderByAggregateInput);
