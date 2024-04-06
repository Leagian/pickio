"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserFollowsOrderByRelationAggregateInput = class UserFollowsOrderByRelationAggregateInput {
};
exports.UserFollowsOrderByRelationAggregateInput = UserFollowsOrderByRelationAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.UserFollowsOrderByRelationAggregateInput = UserFollowsOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsOrderByRelationAggregateInput", {})
], UserFollowsOrderByRelationAggregateInput);
