"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateManyPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookmarkCreateManyPostInput = class BookmarkCreateManyPostInput {
};
exports.BookmarkCreateManyPostInput = BookmarkCreateManyPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyPostInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyPostInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkCreateManyPostInput.prototype, "createdAt", void 0);
exports.BookmarkCreateManyPostInput = BookmarkCreateManyPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateManyPostInput", {})
], BookmarkCreateManyPostInput);
