"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyUserFollowsArgs_1 = require("./args/FindManyUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let FindManyUserFollowsResolver = class FindManyUserFollowsResolver {
    async findManyUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyUserFollowsResolver = FindManyUserFollowsResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserFollows_1.UserFollows], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUserFollowsArgs_1.FindManyUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyUserFollowsResolver.prototype, "findManyUserFollows", null);
exports.FindManyUserFollowsResolver = FindManyUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], FindManyUserFollowsResolver);
