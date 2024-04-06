"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LikeCountOrderByAggregateInput = class LikeCountOrderByAggregateInput {
};
exports.LikeCountOrderByAggregateInput = LikeCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCountOrderByAggregateInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCountOrderByAggregateInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCountOrderByAggregateInput.prototype, "createdAt", void 0);
exports.LikeCountOrderByAggregateInput = LikeCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCountOrderByAggregateInput", {})
], LikeCountOrderByAggregateInput);
