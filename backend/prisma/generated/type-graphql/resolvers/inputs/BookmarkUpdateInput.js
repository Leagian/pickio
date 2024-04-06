"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutBookmarksNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutBookmarksNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutBookmarksNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutBookmarksNestedInput");
let BookmarkUpdateInput = class BookmarkUpdateInput {
};
exports.BookmarkUpdateInput = BookmarkUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookmarkUpdateInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookmarkUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookmarksNestedInput_1.UserUpdateOneRequiredWithoutBookmarksNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutBookmarksNestedInput_1.UserUpdateOneRequiredWithoutBookmarksNestedInput)
], BookmarkUpdateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutBookmarksNestedInput_1.PostUpdateOneRequiredWithoutBookmarksNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutBookmarksNestedInput_1.PostUpdateOneRequiredWithoutBookmarksNestedInput)
], BookmarkUpdateInput.prototype, "Post", void 0);
exports.BookmarkUpdateInput = BookmarkUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateInput", {})
], BookmarkUpdateInput);
