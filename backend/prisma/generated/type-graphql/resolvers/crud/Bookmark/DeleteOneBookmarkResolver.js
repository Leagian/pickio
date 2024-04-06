"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneBookmarkArgs_1 = require("./args/DeleteOneBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const helpers_1 = require("../../../helpers");
let DeleteOneBookmarkResolver = class DeleteOneBookmarkResolver {
    async deleteOneBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneBookmarkResolver = DeleteOneBookmarkResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bookmark_1.Bookmark, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBookmarkArgs_1.DeleteOneBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneBookmarkResolver.prototype, "deleteOneBookmark", null);
exports.DeleteOneBookmarkResolver = DeleteOneBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], DeleteOneBookmarkResolver);
