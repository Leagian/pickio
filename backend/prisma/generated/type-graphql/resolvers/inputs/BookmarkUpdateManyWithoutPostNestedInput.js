"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkUpdateManyWithoutPostNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyPostInputEnvelope_1 = require("../inputs/BookmarkCreateManyPostInputEnvelope");
const BookmarkCreateOrConnectWithoutPostInput_1 = require("../inputs/BookmarkCreateOrConnectWithoutPostInput");
const BookmarkCreateWithoutPostInput_1 = require("../inputs/BookmarkCreateWithoutPostInput");
const BookmarkScalarWhereInput_1 = require("../inputs/BookmarkScalarWhereInput");
const BookmarkUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/BookmarkUpdateManyWithWhereWithoutPostInput");
const BookmarkUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/BookmarkUpdateWithWhereUniqueWithoutPostInput");
const BookmarkUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/BookmarkUpsertWithWhereUniqueWithoutPostInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkUpdateManyWithoutPostNestedInput = class BookmarkUpdateManyWithoutPostNestedInput {
};
exports.BookmarkUpdateManyWithoutPostNestedInput = BookmarkUpdateManyWithoutPostNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateWithoutPostInput_1.BookmarkCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutPostInput_1.BookmarkCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutPostInput_1.BookmarkUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateManyPostInputEnvelope_1.BookmarkCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateManyPostInputEnvelope_1.BookmarkCreateManyPostInputEnvelope)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutPostInput_1.BookmarkUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutPostInput_1.BookmarkUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkScalarWhereInput_1.BookmarkScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.BookmarkUpdateManyWithoutPostNestedInput = BookmarkUpdateManyWithoutPostNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkUpdateManyWithoutPostNestedInput", {})
], BookmarkUpdateManyWithoutPostNestedInput);
