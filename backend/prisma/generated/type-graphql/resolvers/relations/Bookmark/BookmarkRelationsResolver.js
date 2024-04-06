"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Bookmark_1 = require("../../../models/Bookmark");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let BookmarkRelationsResolver = class BookmarkRelationsResolver {
    async User(bookmark, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findUniqueOrThrow({
            where: {
                bookmarkId: bookmark.bookmarkId,
            },
        }).User({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async Post(bookmark, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findUniqueOrThrow({
            where: {
                bookmarkId: bookmark.bookmarkId,
            },
        }).Post({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BookmarkRelationsResolver = BookmarkRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Bookmark_1.Bookmark, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkRelationsResolver.prototype, "User", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Bookmark_1.Bookmark, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkRelationsResolver.prototype, "Post", null);
exports.BookmarkRelationsResolver = BookmarkRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], BookmarkRelationsResolver);
