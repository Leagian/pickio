"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateWithoutPostInput_1 = require("../inputs/BookmarkCreateWithoutPostInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkCreateOrConnectWithoutPostInput = class BookmarkCreateOrConnectWithoutPostInput {
};
exports.BookmarkCreateOrConnectWithoutPostInput = BookmarkCreateOrConnectWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], BookmarkCreateOrConnectWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateWithoutPostInput_1.BookmarkCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkCreateWithoutPostInput_1.BookmarkCreateWithoutPostInput)
], BookmarkCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.BookmarkCreateOrConnectWithoutPostInput = BookmarkCreateOrConnectWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutPostInput", {})
], BookmarkCreateOrConnectWithoutPostInput);
