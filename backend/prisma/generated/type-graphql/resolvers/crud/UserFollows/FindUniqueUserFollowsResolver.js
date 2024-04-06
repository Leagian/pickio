"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUserFollowsArgs_1 = require("./args/FindUniqueUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let FindUniqueUserFollowsResolver = class FindUniqueUserFollowsResolver {
    async findUniqueUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueUserFollowsResolver = FindUniqueUserFollowsResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserFollowsArgs_1.FindUniqueUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUserFollowsResolver.prototype, "findUniqueUserFollows", null);
exports.FindUniqueUserFollowsResolver = FindUniqueUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], FindUniqueUserFollowsResolver);
