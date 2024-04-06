"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutBookmarksInput_1 = require("../inputs/PostCreateNestedOneWithoutBookmarksInput");
let BookmarkCreateWithoutUserInput = class BookmarkCreateWithoutUserInput {
};
exports.BookmarkCreateWithoutUserInput = BookmarkCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateWithoutUserInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutBookmarksInput_1.PostCreateNestedOneWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutBookmarksInput_1.PostCreateNestedOneWithoutBookmarksInput)
], BookmarkCreateWithoutUserInput.prototype, "Post", void 0);
exports.BookmarkCreateWithoutUserInput = BookmarkCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateWithoutUserInput", {})
], BookmarkCreateWithoutUserInput);
