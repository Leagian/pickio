"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateWithoutUserInput_1 = require("../inputs/BookmarkCreateWithoutUserInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkCreateOrConnectWithoutUserInput = class BookmarkCreateOrConnectWithoutUserInput {
};
exports.BookmarkCreateOrConnectWithoutUserInput = BookmarkCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], BookmarkCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateWithoutUserInput_1.BookmarkCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkCreateWithoutUserInput_1.BookmarkCreateWithoutUserInput)
], BookmarkCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.BookmarkCreateOrConnectWithoutUserInput = BookmarkCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutUserInput", {})
], BookmarkCreateOrConnectWithoutUserInput);
