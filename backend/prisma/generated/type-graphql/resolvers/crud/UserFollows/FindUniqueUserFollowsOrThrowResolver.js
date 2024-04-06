"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserFollowsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUserFollowsOrThrowArgs_1 = require("./args/FindUniqueUserFollowsOrThrowArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let FindUniqueUserFollowsOrThrowResolver = class FindUniqueUserFollowsOrThrowResolver {
    async findUniqueUserFollowsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueUserFollowsOrThrowResolver = FindUniqueUserFollowsOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserFollowsOrThrowArgs_1.FindUniqueUserFollowsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUserFollowsOrThrowResolver.prototype, "findUniqueUserFollowsOrThrow", null);
exports.FindUniqueUserFollowsOrThrowResolver = FindUniqueUserFollowsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], FindUniqueUserFollowsOrThrowResolver);
