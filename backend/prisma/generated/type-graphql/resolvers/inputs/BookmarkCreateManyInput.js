"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookmarkCreateManyInput = class BookmarkCreateManyInput {
};
exports.BookmarkCreateManyInput = BookmarkCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkCreateManyInput.prototype, "createdAt", void 0);
exports.BookmarkCreateManyInput = BookmarkCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateManyInput", {})
], BookmarkCreateManyInput);
