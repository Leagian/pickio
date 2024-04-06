"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByShareArgs_1 = require("./args/GroupByShareArgs");
const Share_1 = require("../../../models/Share");
const ShareGroupBy_1 = require("../../outputs/ShareGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByShareResolver = class GroupByShareResolver {
    async groupByShare(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByShareResolver = GroupByShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShareGroupBy_1.ShareGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShareArgs_1.GroupByShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByShareResolver.prototype, "groupByShare", null);
exports.GroupByShareResolver = GroupByShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], GroupByShareResolver);
