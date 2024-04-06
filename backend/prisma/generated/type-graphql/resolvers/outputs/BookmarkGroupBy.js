"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCountAggregate_1 = require("../outputs/BookmarkCountAggregate");
const BookmarkMaxAggregate_1 = require("../outputs/BookmarkMaxAggregate");
const BookmarkMinAggregate_1 = require("../outputs/BookmarkMinAggregate");
let BookmarkGroupBy = class BookmarkGroupBy {
};
exports.BookmarkGroupBy = BookmarkGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkGroupBy.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkGroupBy.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCountAggregate_1.BookmarkCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCountAggregate_1.BookmarkCountAggregate)
], BookmarkGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkMinAggregate_1.BookmarkMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkMinAggregate_1.BookmarkMinAggregate)
], BookmarkGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkMaxAggregate_1.BookmarkMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkMaxAggregate_1.BookmarkMaxAggregate)
], BookmarkGroupBy.prototype, "_max", void 0);
exports.BookmarkGroupBy = BookmarkGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookmarkGroupBy", {})
], BookmarkGroupBy);
