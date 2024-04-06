"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutBookmarksInput_1 = require("../inputs/PostCreateNestedOneWithoutBookmarksInput");
const UserCreateNestedOneWithoutBookmarksInput_1 = require("../inputs/UserCreateNestedOneWithoutBookmarksInput");
let BookmarkCreateInput = class BookmarkCreateInput {
};
exports.BookmarkCreateInput = BookmarkCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkCreateInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookmarkCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookmarksInput_1.UserCreateNestedOneWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookmarksInput_1.UserCreateNestedOneWithoutBookmarksInput)
], BookmarkCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutBookmarksInput_1.PostCreateNestedOneWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutBookmarksInput_1.PostCreateNestedOneWithoutBookmarksInput)
], BookmarkCreateInput.prototype, "Post", void 0);
exports.BookmarkCreateInput = BookmarkCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateInput", {})
], BookmarkCreateInput);
