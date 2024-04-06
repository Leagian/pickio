"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkOrderByWithRelationInput_1 = require("../../../inputs/BookmarkOrderByWithRelationInput");
const BookmarkWhereInput_1 = require("../../../inputs/BookmarkWhereInput");
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
let AggregateBookmarkArgs = class AggregateBookmarkArgs {
};
exports.AggregateBookmarkArgs = AggregateBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], AggregateBookmarkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkOrderByWithRelationInput_1.BookmarkOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBookmarkArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], AggregateBookmarkArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBookmarkArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBookmarkArgs.prototype, "skip", void 0);
exports.AggregateBookmarkArgs = AggregateBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBookmarkArgs);
