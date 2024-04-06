"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkWhereInput_1 = require("../inputs/BookmarkWhereInput");
let BookmarkListRelationFilter = class BookmarkListRelationFilter {
};
exports.BookmarkListRelationFilter = BookmarkListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], BookmarkListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], BookmarkListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], BookmarkListRelationFilter.prototype, "none", void 0);
exports.BookmarkListRelationFilter = BookmarkListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkListRelationFilter", {})
], BookmarkListRelationFilter);
