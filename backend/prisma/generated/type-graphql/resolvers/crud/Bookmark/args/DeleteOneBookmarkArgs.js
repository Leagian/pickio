"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
let DeleteOneBookmarkArgs = class DeleteOneBookmarkArgs {
};
exports.DeleteOneBookmarkArgs = DeleteOneBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], DeleteOneBookmarkArgs.prototype, "where", void 0);
exports.DeleteOneBookmarkArgs = DeleteOneBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneBookmarkArgs);
