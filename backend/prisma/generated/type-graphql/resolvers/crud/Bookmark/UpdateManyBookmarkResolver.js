"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyBookmarkArgs_1 = require("./args/UpdateManyBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyBookmarkResolver = class UpdateManyBookmarkResolver {
    async updateManyBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyBookmarkResolver = UpdateManyBookmarkResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBookmarkArgs_1.UpdateManyBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyBookmarkResolver.prototype, "updateManyBookmark", null);
exports.UpdateManyBookmarkResolver = UpdateManyBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], UpdateManyBookmarkResolver);
