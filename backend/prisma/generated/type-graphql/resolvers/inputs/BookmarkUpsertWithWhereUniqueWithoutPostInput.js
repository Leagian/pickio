"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateWithoutPostInput_1 = require("../inputs/BookmarkCreateWithoutPostInput");
const BookmarkUpdateWithoutPostInput_1 = require("../inputs/BookmarkUpdateWithoutPostInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkUpsertWithWhereUniqueWithoutPostInput = class BookmarkUpsertWithWhereUniqueWithoutPostInput {
};
exports.BookmarkUpsertWithWhereUniqueWithoutPostInput = BookmarkUpsertWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], BookmarkUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateWithoutPostInput_1.BookmarkUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateWithoutPostInput_1.BookmarkUpdateWithoutPostInput)
], BookmarkUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateWithoutPostInput_1.BookmarkCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkCreateWithoutPostInput_1.BookmarkCreateWithoutPostInput)
], BookmarkUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
exports.BookmarkUpsertWithWhereUniqueWithoutPostInput = BookmarkUpsertWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutPostInput", {})
], BookmarkUpsertWithWhereUniqueWithoutPostInput);
