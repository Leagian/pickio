"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateWithoutPostInput_1 = require("../inputs/BookmarkUpdateWithoutPostInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkUpdateWithWhereUniqueWithoutPostInput = class BookmarkUpdateWithWhereUniqueWithoutPostInput {
};
exports.BookmarkUpdateWithWhereUniqueWithoutPostInput = BookmarkUpdateWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], BookmarkUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateWithoutPostInput_1.BookmarkUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateWithoutPostInput_1.BookmarkUpdateWithoutPostInput)
], BookmarkUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
exports.BookmarkUpdateWithWhereUniqueWithoutPostInput = BookmarkUpdateWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutPostInput", {})
], BookmarkUpdateWithWhereUniqueWithoutPostInput);
