"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateManyMutationInput_1 = require("../../../inputs/BookmarkUpdateManyMutationInput");
const BookmarkWhereInput_1 = require("../../../inputs/BookmarkWhereInput");
let UpdateManyBookmarkArgs = class UpdateManyBookmarkArgs {
};
exports.UpdateManyBookmarkArgs = UpdateManyBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateManyMutationInput_1.BookmarkUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateManyMutationInput_1.BookmarkUpdateManyMutationInput)
], UpdateManyBookmarkArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], UpdateManyBookmarkArgs.prototype, "where", void 0);
exports.UpdateManyBookmarkArgs = UpdateManyBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBookmarkArgs);
