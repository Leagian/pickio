"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCountOrderByAggregateInput_1 = require("../inputs/BookmarkCountOrderByAggregateInput");
const BookmarkMaxOrderByAggregateInput_1 = require("../inputs/BookmarkMaxOrderByAggregateInput");
const BookmarkMinOrderByAggregateInput_1 = require("../inputs/BookmarkMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookmarkOrderByWithAggregationInput = class BookmarkOrderByWithAggregationInput {
};
exports.BookmarkOrderByWithAggregationInput = BookmarkOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkOrderByWithAggregationInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkOrderByWithAggregationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCountOrderByAggregateInput_1.BookmarkCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCountOrderByAggregateInput_1.BookmarkCountOrderByAggregateInput)
], BookmarkOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkMaxOrderByAggregateInput_1.BookmarkMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkMaxOrderByAggregateInput_1.BookmarkMaxOrderByAggregateInput)
], BookmarkOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkMinOrderByAggregateInput_1.BookmarkMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkMinOrderByAggregateInput_1.BookmarkMinOrderByAggregateInput)
], BookmarkOrderByWithAggregationInput.prototype, "_min", void 0);
exports.BookmarkOrderByWithAggregationInput = BookmarkOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkOrderByWithAggregationInput", {})
], BookmarkOrderByWithAggregationInput);
