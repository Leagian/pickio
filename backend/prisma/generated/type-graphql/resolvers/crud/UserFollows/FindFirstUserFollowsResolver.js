"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUserFollowsArgs_1 = require("./args/FindFirstUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let FindFirstUserFollowsResolver = class FindFirstUserFollowsResolver {
    async findFirstUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstUserFollowsResolver = FindFirstUserFollowsResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserFollowsArgs_1.FindFirstUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUserFollowsResolver.prototype, "findFirstUserFollows", null);
exports.FindFirstUserFollowsResolver = FindFirstUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], FindFirstUserFollowsResolver);
