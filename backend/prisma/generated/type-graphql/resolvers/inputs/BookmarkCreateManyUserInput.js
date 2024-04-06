"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookmarkCreateManyUserInput = class BookmarkCreateManyUserInput {
};
exports.BookmarkCreateManyUserInput = BookmarkCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyUserInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateManyUserInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkCreateManyUserInput.prototype, "createdAt", void 0);
exports.BookmarkCreateManyUserInput = BookmarkCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateManyUserInput", {})
], BookmarkCreateManyUserInput);
