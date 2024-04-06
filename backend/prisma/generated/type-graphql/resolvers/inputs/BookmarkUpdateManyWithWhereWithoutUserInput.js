"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkScalarWhereInput_1 = require("../inputs/BookmarkScalarWhereInput");
const BookmarkUpdateManyMutationInput_1 = require("../inputs/BookmarkUpdateManyMutationInput");
let BookmarkUpdateManyWithWhereWithoutUserInput = class BookmarkUpdateManyWithWhereWithoutUserInput {
};
exports.BookmarkUpdateManyWithWhereWithoutUserInput = BookmarkUpdateManyWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkScalarWhereInput_1.BookmarkScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkScalarWhereInput_1.BookmarkScalarWhereInput)
], BookmarkUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateManyMutationInput_1.BookmarkUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateManyMutationInput_1.BookmarkUpdateManyMutationInput)
], BookmarkUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.BookmarkUpdateManyWithWhereWithoutUserInput = BookmarkUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateManyWithWhereWithoutUserInput", {})
], BookmarkUpdateManyWithWhereWithoutUserInput);
