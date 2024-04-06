"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookmarkMaxAggregate = class BookmarkMaxAggregate {
};
exports.BookmarkMaxAggregate = BookmarkMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxAggregate.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkMaxAggregate.prototype, "createdAt", void 0);
exports.BookmarkMaxAggregate = BookmarkMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookmarkMaxAggregate", {})
], BookmarkMaxAggregate);
