"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyShareArgs_1 = require("./args/DeleteManyShareArgs");
const Share_1 = require("../../../models/Share");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyShareResolver = class DeleteManyShareResolver {
    async deleteManyShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyShareResolver = DeleteManyShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShareArgs_1.DeleteManyShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyShareResolver.prototype, "deleteManyShare", null);
exports.DeleteManyShareResolver = DeleteManyShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], DeleteManyShareResolver);
