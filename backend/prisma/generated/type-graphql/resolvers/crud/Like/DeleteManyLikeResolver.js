"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyLikeArgs_1 = require("./args/DeleteManyLikeArgs");
const Like_1 = require("../../../models/Like");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyLikeResolver = class DeleteManyLikeResolver {
    async deleteManyLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyLikeResolver = DeleteManyLikeResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLikeArgs_1.DeleteManyLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyLikeResolver.prototype, "deleteManyLike", null);
exports.DeleteManyLikeResolver = DeleteManyLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], DeleteManyLikeResolver);
