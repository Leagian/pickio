"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByUserFollowsArgs_1 = require("./args/GroupByUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const UserFollowsGroupBy_1 = require("../../outputs/UserFollowsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUserFollowsResolver = class GroupByUserFollowsResolver {
    async groupByUserFollows(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByUserFollowsResolver = GroupByUserFollowsResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserFollowsGroupBy_1.UserFollowsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUserFollowsArgs_1.GroupByUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByUserFollowsResolver.prototype, "groupByUserFollows", null);
exports.GroupByUserFollowsResolver = GroupByUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], GroupByUserFollowsResolver);
