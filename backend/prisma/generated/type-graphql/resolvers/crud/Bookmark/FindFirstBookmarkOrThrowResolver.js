"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBookmarkOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBookmarkOrThrowArgs_1 = require("./args/FindFirstBookmarkOrThrowArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const helpers_1 = require("../../../helpers");
let FindFirstBookmarkOrThrowResolver = class FindFirstBookmarkOrThrowResolver {
    async findFirstBookmarkOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstBookmarkOrThrowResolver = FindFirstBookmarkOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bookmark_1.Bookmark, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookmarkOrThrowArgs_1.FindFirstBookmarkOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBookmarkOrThrowResolver.prototype, "findFirstBookmarkOrThrow", null);
exports.FindFirstBookmarkOrThrowResolver = FindFirstBookmarkOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], FindFirstBookmarkOrThrowResolver);