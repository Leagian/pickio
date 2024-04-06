"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookmarkOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBookmarkOrThrowArgs_1 = require("./args/FindUniqueBookmarkOrThrowArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const helpers_1 = require("../../../helpers");
let FindUniqueBookmarkOrThrowResolver = class FindUniqueBookmarkOrThrowResolver {
    async getBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueBookmarkOrThrowResolver = FindUniqueBookmarkOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bookmark_1.Bookmark, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookmarkOrThrowArgs_1.FindUniqueBookmarkOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBookmarkOrThrowResolver.prototype, "getBookmark", null);
exports.FindUniqueBookmarkOrThrowResolver = FindUniqueBookmarkOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], FindUniqueBookmarkOrThrowResolver);
