"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkOrderByWithAggregationInput_1 = require("../../../inputs/BookmarkOrderByWithAggregationInput");
const BookmarkScalarWhereWithAggregatesInput_1 = require("../../../inputs/BookmarkScalarWhereWithAggregatesInput");
const BookmarkWhereInput_1 = require("../../../inputs/BookmarkWhereInput");
const BookmarkScalarFieldEnum_1 = require("../../../../enums/BookmarkScalarFieldEnum");
let GroupByBookmarkArgs = class GroupByBookmarkArgs {
};
exports.GroupByBookmarkArgs = GroupByBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], GroupByBookmarkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkOrderByWithAggregationInput_1.BookmarkOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookmarkArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkScalarFieldEnum_1.BookmarkScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookmarkArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkScalarWhereWithAggregatesInput_1.BookmarkScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkScalarWhereWithAggregatesInput_1.BookmarkScalarWhereWithAggregatesInput)
], GroupByBookmarkArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookmarkArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookmarkArgs.prototype, "skip", void 0);
exports.GroupByBookmarkArgs = GroupByBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBookmarkArgs);
