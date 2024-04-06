"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyPostInputEnvelope_1 = require("../inputs/BookmarkCreateManyPostInputEnvelope");
const BookmarkCreateOrConnectWithoutPostInput_1 = require("../inputs/BookmarkCreateOrConnectWithoutPostInput");
const BookmarkCreateWithoutPostInput_1 = require("../inputs/BookmarkCreateWithoutPostInput");
const BookmarkWhereUniqueInput_1 = require("../inputs/BookmarkWhereUniqueInput");
let BookmarkCreateNestedManyWithoutPostInput = class BookmarkCreateNestedManyWithoutPostInput {
};
exports.BookmarkCreateNestedManyWithoutPostInput = BookmarkCreateNestedManyWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateWithoutPostInput_1.BookmarkCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateNestedManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutPostInput_1.BookmarkCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateManyPostInputEnvelope_1.BookmarkCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateManyPostInputEnvelope_1.BookmarkCreateManyPostInputEnvelope)
], BookmarkCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
exports.BookmarkCreateNestedManyWithoutPostInput = BookmarkCreateNestedManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutPostInput", {})
], BookmarkCreateNestedManyWithoutPostInput);
