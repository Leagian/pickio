"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookmarkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBookmarkArgs_1 = require("./args/GroupByBookmarkArgs");
const Bookmark_1 = require("../../../models/Bookmark");
const BookmarkGroupBy_1 = require("../../outputs/BookmarkGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBookmarkResolver = class GroupByBookmarkResolver {
    async groupByBookmark(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByBookmarkResolver = GroupByBookmarkResolver;
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
], GroupByBookmarkResolver.prototype, "groupByBookmark", null);
exports.GroupByBookmarkResolver = GroupByBookmarkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bookmark_1.Bookmark)
], GroupByBookmarkResolver);
