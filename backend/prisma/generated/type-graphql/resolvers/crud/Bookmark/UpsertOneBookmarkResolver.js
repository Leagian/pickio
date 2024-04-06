"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneBookmarkArgs_1 = require("./args/UpsertOneBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const helpers_1 = require("../../../helpers");
let UpsertOneBookmarkResolver = class UpsertOneBookmarkResolver {
    async upsertOneBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneBookmarkResolver = UpsertOneBookmarkResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bookmark_1.Bookmark, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBookmarkArgs_1.UpsertOneBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneBookmarkResolver.prototype, "upsertOneBookmark", null);
exports.UpsertOneBookmarkResolver = UpsertOneBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], UpsertOneBookmarkResolver);
