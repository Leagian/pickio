"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookmarkCountAggregate = class BookmarkCountAggregate {
};
exports.BookmarkCountAggregate = BookmarkCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookmarkCountAggregate.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookmarkCountAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookmarkCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookmarkCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookmarkCountAggregate.prototype, "_all", void 0);
exports.BookmarkCountAggregate = BookmarkCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookmarkCountAggregate", {})
], BookmarkCountAggregate);
