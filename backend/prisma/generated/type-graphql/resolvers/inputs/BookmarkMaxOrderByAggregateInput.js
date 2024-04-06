"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookmarkMaxOrderByAggregateInput = class BookmarkMaxOrderByAggregateInput {
};
exports.BookmarkMaxOrderByAggregateInput = BookmarkMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxOrderByAggregateInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxOrderByAggregateInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxOrderByAggregateInput.prototype, "createdAt", void 0);
exports.BookmarkMaxOrderByAggregateInput = BookmarkMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkMaxOrderByAggregateInput", {})
], BookmarkMaxOrderByAggregateInput);
