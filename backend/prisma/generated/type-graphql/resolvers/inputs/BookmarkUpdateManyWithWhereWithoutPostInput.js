"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateManyWithWhereWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkScalarWhereInput_1 = require("../inputs/BookmarkScalarWhereInput");
const BookmarkUpdateManyMutationInput_1 = require("../inputs/BookmarkUpdateManyMutationInput");
let BookmarkUpdateManyWithWhereWithoutPostInput = class BookmarkUpdateManyWithWhereWithoutPostInput {
};
exports.BookmarkUpdateManyWithWhereWithoutPostInput = BookmarkUpdateManyWithWhereWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkScalarWhereInput_1.BookmarkScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkScalarWhereInput_1.BookmarkScalarWhereInput)
], BookmarkUpdateManyWithWhereWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateManyMutationInput_1.BookmarkUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateManyMutationInput_1.BookmarkUpdateManyMutationInput)
], BookmarkUpdateManyWithWhereWithoutPostInput.prototype, "data", void 0);
exports.BookmarkUpdateManyWithWhereWithoutPostInput = BookmarkUpdateManyWithWhereWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateManyWithWhereWithoutPostInput", {})
], BookmarkUpdateManyWithWhereWithoutPostInput);
