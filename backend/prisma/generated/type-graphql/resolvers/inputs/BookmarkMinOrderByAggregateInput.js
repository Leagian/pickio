"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookmarkMinOrderByAggregateInput = class BookmarkMinOrderByAggregateInput {
};
exports.BookmarkMinOrderByAggregateInput = BookmarkMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinOrderByAggregateInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinOrderByAggregateInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinOrderByAggregateInput.prototype, "createdAt", void 0);
exports.BookmarkMinOrderByAggregateInput = BookmarkMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkMinOrderByAggregateInput", {})
], BookmarkMinOrderByAggregateInput);
