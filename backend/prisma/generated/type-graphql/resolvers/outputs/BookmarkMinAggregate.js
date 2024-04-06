"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookmarkMinAggregate = class BookmarkMinAggregate {
};
exports.BookmarkMinAggregate = BookmarkMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinAggregate.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkMinAggregate.prototype, "createdAt", void 0);
exports.BookmarkMinAggregate = BookmarkMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookmarkMinAggregate", {})
], BookmarkMinAggregate);
