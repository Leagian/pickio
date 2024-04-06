"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyUserInputEnvelope_1 = require("../inputs/BookmarkCreateManyUserInputEnvelope");
const BookmarkCreateOrConnectWithoutUserInput_1 = require("../inputs/BookmarkCreateOrConnectWithoutUserInput");
const BookmarkCreateWithoutUserInput_1 = require("../inputs/BookmarkCreateWithoutUserInput");
const BookmarkScalarWhereInput_1 = require("../inputs/BookmarkScalarWhereInput");
const BookmarkUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/BookmarkUpdateManyWithWhereWithoutUserInput");
const BookmarkUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/BookmarkUpdateWithWhereUniqueWithoutUserInput");
const BookmarkUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/BookmarkUpsertWithWhereUniqueWithoutUserInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkUpdateManyWithoutUserNestedInput = class BookmarkUpdateManyWithoutUserNestedInput {
};
exports.BookmarkUpdateManyWithoutUserNestedInput = BookmarkUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateWithoutUserInput_1.BookmarkCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutUserInput_1.BookmarkCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutUserInput_1.BookmarkUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateManyUserInputEnvelope_1.BookmarkCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateManyUserInputEnvelope_1.BookmarkCreateManyUserInputEnvelope)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutUserInput_1.BookmarkUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutUserInput_1.BookmarkUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkScalarWhereInput_1.BookmarkScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.BookmarkUpdateManyWithoutUserNestedInput = BookmarkUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateManyWithoutUserNestedInput", {})
], BookmarkUpdateManyWithoutUserNestedInput);
