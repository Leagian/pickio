"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBookmarkArgs_1 = require("./args/FindFirstBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const helpers_1 = require("../../../helpers");
let FindFirstBookmarkResolver = class FindFirstBookmarkResolver {
    async findFirstBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstBookmarkResolver = FindFirstBookmarkResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bookmark_1.Bookmark, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookmarkArgs_1.FindFirstBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBookmarkResolver.prototype, "findFirstBookmark", null);
exports.FindFirstBookmarkResolver = FindFirstBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], FindFirstBookmarkResolver);
