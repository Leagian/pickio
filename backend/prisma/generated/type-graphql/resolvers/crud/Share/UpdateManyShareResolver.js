"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyShareArgs_1 = require("./args/UpdateManyShareArgs");
const Share_1 = require("../../../models/Share");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyShareResolver = class UpdateManyShareResolver {
    async updateManyShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyShareResolver = UpdateManyShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShareArgs_1.UpdateManyShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyShareResolver.prototype, "updateManyShare", null);
exports.UpdateManyShareResolver = UpdateManyShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], UpdateManyShareResolver);
