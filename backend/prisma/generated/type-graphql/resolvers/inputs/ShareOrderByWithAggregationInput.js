"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCountOrderByAggregateInput_1 = require("../inputs/ShareCountOrderByAggregateInput");
const ShareMaxOrderByAggregateInput_1 = require("../inputs/ShareMaxOrderByAggregateInput");
const ShareMinOrderByAggregateInput_1 = require("../inputs/ShareMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ShareOrderByWithAggregationInput = class ShareOrderByWithAggregationInput {
};
exports.ShareOrderByWithAggregationInput = ShareOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareOrderByWithAggregationInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareOrderByWithAggregationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCountOrderByAggregateInput_1.ShareCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCountOrderByAggregateInput_1.ShareCountOrderByAggregateInput)
], ShareOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareMaxOrderByAggregateInput_1.ShareMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareMaxOrderByAggregateInput_1.ShareMaxOrderByAggregateInput)
], ShareOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareMinOrderByAggregateInput_1.ShareMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareMinOrderByAggregateInput_1.ShareMinOrderByAggregateInput)
], ShareOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ShareOrderByWithAggregationInput = ShareOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareOrderByWithAggregationInput", {})
], ShareOrderByWithAggregationInput);
