"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBookmarkArgs_1 = require("./args/DeleteManyBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBookmarkResolver = class DeleteManyBookmarkResolver {
    async deleteManyBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyBookmarkResolver = DeleteManyBookmarkResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookmarkArgs_1.DeleteManyBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBookmarkResolver.prototype, "deleteManyBookmark", null);
exports.DeleteManyBookmarkResolver = DeleteManyBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], DeleteManyBookmarkResolver);
