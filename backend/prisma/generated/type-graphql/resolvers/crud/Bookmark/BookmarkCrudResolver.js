"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBookmarkArgs_1 = require("./args/AggregateBookmarkArgs");
const CreateManyBookmarkArgs_1 = require("./args/CreateManyBookmarkArgs");
const CreateOneBookmarkArgs_1 = require("./args/CreateOneBookmarkArgs");
const DeleteManyBookmarkArgs_1 = require("./args/DeleteManyBookmarkArgs");
const DeleteOneBookmarkArgs_1 = require("./args/DeleteOneBookmarkArgs");
const FindFirstBookmarkArgs_1 = require("./args/FindFirstBookmarkArgs");
const FindFirstBookmarkOrThrowArgs_1 = require("./args/FindFirstBookmarkOrThrowArgs");
const FindManyBookmarkArgs_1 = require("./args/FindManyBookmarkArgs");
const FindUniqueBookmarkArgs_1 = require("./args/FindUniqueBookmarkArgs");
const FindUniqueBookmarkOrThrowArgs_1 = require("./args/FindUniqueBookmarkOrThrowArgs");
const GroupByBookmarkArgs_1 = require("./args/GroupByBookmarkArgs");
const UpdateManyBookmarkArgs_1 = require("./args/UpdateManyBookmarkArgs");
const UpdateOneBookmarkArgs_1 = require("./args/UpdateOneBookmarkArgs");
const UpsertOneBookmarkArgs_1 = require("./args/UpsertOneBookmarkArgs");
const helpers_1 = require("../../../helpers");
const Bookmark_1 = require("../../../models/Bookmark");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBookmark_1 = require("../../outputs/AggregateBookmark");
const BookmarkGroupBy_1 = require("../../outputs/BookmarkGroupBy");
let BookmarkCrudResolver = class BookmarkCrudResolver {
    async aggregateBookmark(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookmarkOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bookmarks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBookmark(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBookmark(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BookmarkCrudResolver = BookmarkCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookmark_1.AggregateBookmark, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookmarkArgs_1.AggregateBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkCrudResolver.prototype, "aggregateBookmark", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBookmarkArgs_1.CreateManyBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkCrudResolver.prototype, "createManyBookmark", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bookmark_1.Bookmark, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBookmarkArgs_1.CreateOneBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkCrudResolver.prototype, "createOneBookmark", null);
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
], BookmarkCrudResolver.prototype, "deleteManyBookmark", null);
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
], BookmarkCrudResolver.prototype, "deleteOneBookmark", null);
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
], BookmarkCrudResolver.prototype, "findFirstBookmark", null);
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
], BookmarkCrudResolver.prototype, "findFirstBookmarkOrThrow", null);
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
], BookmarkCrudResolver.prototype, "bookmarks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bookmark_1.Bookmark, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookmarkArgs_1.FindUniqueBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkCrudResolver.prototype, "bookmark", null);
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
], BookmarkCrudResolver.prototype, "getBookmark", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookmarkGroupBy_1.BookmarkGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookmarkArgs_1.GroupByBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkCrudResolver.prototype, "groupByBookmark", null);
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
], BookmarkCrudResolver.prototype, "updateManyBookmark", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bookmark_1.Bookmark, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBookmarkArgs_1.UpdateOneBookmarkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookmarkCrudResolver.prototype, "updateOneBookmark", null);
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
], BookmarkCrudResolver.prototype, "upsertOneBookmark", null);
exports.BookmarkCrudResolver = BookmarkCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], BookmarkCrudResolver);
