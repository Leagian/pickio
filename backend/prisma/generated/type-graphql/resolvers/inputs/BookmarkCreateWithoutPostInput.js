"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutBookmarksInput_1 = require("../inputs/UserCreateNestedOneWithoutBookmarksInput");
let BookmarkCreateWithoutPostInput = class BookmarkCreateWithoutPostInput {
};
exports.BookmarkCreateWithoutPostInput = BookmarkCreateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateWithoutPostInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkCreateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookmarksInput_1.UserCreateNestedOneWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookmarksInput_1.UserCreateNestedOneWithoutBookmarksInput)
], BookmarkCreateWithoutPostInput.prototype, "User", void 0);
exports.BookmarkCreateWithoutPostInput = BookmarkCreateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateWithoutPostInput", {})
], BookmarkCreateWithoutPostInput);
