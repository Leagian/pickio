"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneUserFollowsArgs_1 = require("./args/UpdateOneUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const helpers_1 = require("../../../helpers");
let UpdateOneUserFollowsResolver = class UpdateOneUserFollowsResolver {
    async updateOneUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneUserFollowsResolver = UpdateOneUserFollowsResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserFollowsArgs_1.UpdateOneUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneUserFollowsResolver.prototype, "updateOneUserFollows", null);
exports.UpdateOneUserFollowsResolver = UpdateOneUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], UpdateOneUserFollowsResolver);
