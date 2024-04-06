"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateWithoutUserInput_1 = require("../inputs/BookmarkCreateWithoutUserInput");
const BookmarkUpdateWithoutUserInput_1 = require("../inputs/BookmarkUpdateWithoutUserInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkUpsertWithWhereUniqueWithoutUserInput = class BookmarkUpsertWithWhereUniqueWithoutUserInput {
};
exports.BookmarkUpsertWithWhereUniqueWithoutUserInput = BookmarkUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], BookmarkUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateWithoutUserInput_1.BookmarkUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateWithoutUserInput_1.BookmarkUpdateWithoutUserInput)
], BookmarkUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateWithoutUserInput_1.BookmarkCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkCreateWithoutUserInput_1.BookmarkCreateWithoutUserInput)
], BookmarkUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.BookmarkUpsertWithWhereUniqueWithoutUserInput = BookmarkUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutUserInput", {})
], BookmarkUpsertWithWhereUniqueWithoutUserInput);
