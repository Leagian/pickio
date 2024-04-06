"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneShareArgs_1 = require("./args/UpsertOneShareArgs");
const Share_1 = require("../../../models/Share");
const helpers_1 = require("../../../helpers");
let UpsertOneShareResolver = class UpsertOneShareResolver {
    async upsertOneShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneShareResolver = UpsertOneShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Share_1.Share, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneShareArgs_1.UpsertOneShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneShareResolver.prototype, "upsertOneShare", null);
exports.UpsertOneShareResolver = UpsertOneShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], UpsertOneShareResolver);
