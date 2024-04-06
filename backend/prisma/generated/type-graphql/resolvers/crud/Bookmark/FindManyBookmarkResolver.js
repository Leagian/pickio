"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyBookmarkArgs_1 = require("./args/FindManyBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const helpers_1 = require("../../../helpers");
let FindManyBookmarkResolver = class FindManyBookmarkResolver {
    async bookmarks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyBookmarkResolver = FindManyBookmarkResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Bookmark_1.Bookmark], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookmarkArgs_1.FindManyBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBookmarkResolver.prototype, "bookmarks", null);
exports.FindManyBookmarkResolver = FindManyBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], FindManyBookmarkResolver);
