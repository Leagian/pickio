"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutBookmarksNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutBookmarksNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BookmarkUpdateWithoutUserInput = class BookmarkUpdateWithoutUserInput {
};
exports.BookmarkUpdateWithoutUserInput = BookmarkUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookmarkUpdateWithoutUserInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookmarkUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutBookmarksNestedInput_1.PostUpdateOneRequiredWithoutBookmarksNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutBookmarksNestedInput_1.PostUpdateOneRequiredWithoutBookmarksNestedInput)
], BookmarkUpdateWithoutUserInput.prototype, "Post", void 0);
exports.BookmarkUpdateWithoutUserInput = BookmarkUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateWithoutUserInput", {})
], BookmarkUpdateWithoutUserInput);
