"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookmark = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCountAggregate_1 = require("../outputs/BookmarkCountAggregate");
const BookmarkMaxAggregate_1 = require("../outputs/BookmarkMaxAggregate");
const BookmarkMinAggregate_1 = require("../outputs/BookmarkMinAggregate");
let AggregateBookmark = class AggregateBookmark {
};
exports.AggregateBookmark = AggregateBookmark;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCountAggregate_1.BookmarkCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCountAggregate_1.BookmarkCountAggregate)
], AggregateBookmark.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkMinAggregate_1.BookmarkMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkMinAggregate_1.BookmarkMinAggregate)
], AggregateBookmark.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkMaxAggregate_1.BookmarkMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkMaxAggregate_1.BookmarkMaxAggregate)
], AggregateBookmark.prototype, "_max", void 0);
exports.AggregateBookmark = AggregateBookmark = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBookmark", {})
], AggregateBookmark);
