"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBookmarksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkOrderByWithRelationInput_1 = require("../../../inputs/BookmarkOrderByWithRelationInput");
const BookmarkWhereInput_1 = require("../../../inputs/BookmarkWhereInput");
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
const BookmarkScalarFieldEnum_1 = require("../../../../enums/BookmarkScalarFieldEnum");
let PostBookmarksArgs = class PostBookmarksArgs {
};
exports.PostBookmarksArgs = PostBookmarksArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], PostBookmarksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkOrderByWithRelationInput_1.BookmarkOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostBookmarksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], PostBookmarksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostBookmarksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostBookmarksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkScalarFieldEnum_1.BookmarkScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostBookmarksArgs.prototype, "distinct", void 0);
exports.PostBookmarksArgs = PostBookmarksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PostBookmarksArgs);
