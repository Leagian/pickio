"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateWithoutUserInput_1 = require("../inputs/BookmarkUpdateWithoutUserInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkUpdateWithWhereUniqueWithoutUserInput = class BookmarkUpdateWithWhereUniqueWithoutUserInput {
};
exports.BookmarkUpdateWithWhereUniqueWithoutUserInput = BookmarkUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], BookmarkUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateWithoutUserInput_1.BookmarkUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateWithoutUserInput_1.BookmarkUpdateWithoutUserInput)
], BookmarkUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.BookmarkUpdateWithWhereUniqueWithoutUserInput = BookmarkUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutUserInput", {})
], BookmarkUpdateWithWhereUniqueWithoutUserInput);
