"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserFollowsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUserFollowsOrThrowArgs_1 = require("./args/FindFirstUserFollowsOrThrowArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let FindFirstUserFollowsOrThrowResolver = class FindFirstUserFollowsOrThrowResolver {
    async findFirstUserFollowsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstUserFollowsOrThrowResolver = FindFirstUserFollowsOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserFollowsOrThrowArgs_1.FindFirstUserFollowsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUserFollowsOrThrowResolver.prototype, "findFirstUserFollowsOrThrow", null);
exports.FindFirstUserFollowsOrThrowResolver = FindFirstUserFollowsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], FindFirstUserFollowsOrThrowResolver);
