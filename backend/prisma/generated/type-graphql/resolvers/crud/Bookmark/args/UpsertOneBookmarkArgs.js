"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateInput_1 = require("../../../inputs/BookmarkCreateInput");
const BookmarkUpdateInput_1 = require("../../../inputs/BookmarkUpdateInput");
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
let UpsertOneBookmarkArgs = class UpsertOneBookmarkArgs {
};
exports.UpsertOneBookmarkArgs = UpsertOneBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], UpsertOneBookmarkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateInput_1.BookmarkCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkCreateInput_1.BookmarkCreateInput)
], UpsertOneBookmarkArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateInput_1.BookmarkUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateInput_1.BookmarkUpdateInput)
], UpsertOneBookmarkArgs.prototype, "update", void 0);
exports.UpsertOneBookmarkArgs = UpsertOneBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBookmarkArgs);
