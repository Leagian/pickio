"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyUserFollowsArgs_1 = require("./args/DeleteManyUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUserFollowsResolver = class DeleteManyUserFollowsResolver {
    async deleteManyUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyUserFollowsResolver = DeleteManyUserFollowsResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUserFollowsArgs_1.DeleteManyUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyUserFollowsResolver.prototype, "deleteManyUserFollows", null);
exports.DeleteManyUserFollowsResolver = DeleteManyUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], DeleteManyUserFollowsResolver);
