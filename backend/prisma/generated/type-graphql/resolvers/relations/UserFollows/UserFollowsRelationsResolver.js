"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../../../models/User");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let UserFollowsRelationsResolver = class UserFollowsRelationsResolver {
    async follower(userFollows, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findUniqueOrThrow({
            where: {
                UserFollowsId: userFollows.UserFollowsId,
            },
        }).follower({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async following(userFollows, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findUniqueOrThrow({
            where: {
                UserFollowsId: userFollows.UserFollowsId,
            },
        }).following({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UserFollowsRelationsResolver = UserFollowsRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserFollows_1.UserFollows, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsRelationsResolver.prototype, "follower", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserFollows_1.UserFollows, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsRelationsResolver.prototype, "following", null);
exports.UserFollowsRelationsResolver = UserFollowsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], UserFollowsRelationsResolver);
