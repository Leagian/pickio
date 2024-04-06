"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LikeMaxOrderByAggregateInput = class LikeMaxOrderByAggregateInput {
};
exports.LikeMaxOrderByAggregateInput = LikeMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxOrderByAggregateInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxOrderByAggregateInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxOrderByAggregateInput.prototype, "createdAt", void 0);
exports.LikeMaxOrderByAggregateInput = LikeMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeMaxOrderByAggregateInput", {})
], LikeMaxOrderByAggregateInput);
