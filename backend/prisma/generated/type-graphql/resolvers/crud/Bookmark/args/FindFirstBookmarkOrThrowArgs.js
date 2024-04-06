"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBookmarkOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkOrderByWithRelationInput_1 = require("../../../inputs/BookmarkOrderByWithRelationInput");
const BookmarkWhereInput_1 = require("../../../inputs/BookmarkWhereInput");
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
const BookmarkScalarFieldEnum_1 = require("../../../../enums/BookmarkScalarFieldEnum");
let FindFirstBookmarkOrThrowArgs = class FindFirstBookmarkOrThrowArgs {
};
exports.FindFirstBookmarkOrThrowArgs = FindFirstBookmarkOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], FindFirstBookmarkOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkOrderByWithRelationInput_1.BookmarkOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBookmarkOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], FindFirstBookmarkOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBookmarkOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBookmarkOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkScalarFieldEnum_1.BookmarkScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBookmarkOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstBookmarkOrThrowArgs = FindFirstBookmarkOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstBookmarkOrThrowArgs);
