"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyUserInputEnvelope_1 = require("../inputs/BookmarkCreateManyUserInputEnvelope");
const BookmarkCreateOrConnectWithoutUserInput_1 = require("../inputs/BookmarkCreateOrConnectWithoutUserInput");
const BookmarkCreateWithoutUserInput_1 = require("../inputs/BookmarkCreateWithoutUserInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkCreateNestedManyWithoutUserInput = class BookmarkCreateNestedManyWithoutUserInput {
};
exports.BookmarkCreateNestedManyWithoutUserInput = BookmarkCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateWithoutUserInput_1.BookmarkCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutUserInput_1.BookmarkCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateManyUserInputEnvelope_1.BookmarkCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateManyUserInputEnvelope_1.BookmarkCreateManyUserInputEnvelope)
], BookmarkCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.BookmarkCreateNestedManyWithoutUserInput = BookmarkCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutUserInput", {})
], BookmarkCreateNestedManyWithoutUserInput);
