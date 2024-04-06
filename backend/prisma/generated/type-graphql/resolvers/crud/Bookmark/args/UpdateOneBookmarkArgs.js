"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateInput_1 = require("../../../inputs/BookmarkUpdateInput");
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
let UpdateOneBookmarkArgs = class UpdateOneBookmarkArgs {
};
exports.UpdateOneBookmarkArgs = UpdateOneBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateInput_1.BookmarkUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateInput_1.BookmarkUpdateInput)
], UpdateOneBookmarkArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], UpdateOneBookmarkArgs.prototype, "where", void 0);
exports.UpdateOneBookmarkArgs = UpdateOneBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBookmarkArgs);
