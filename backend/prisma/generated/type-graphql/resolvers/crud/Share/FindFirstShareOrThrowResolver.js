"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShareOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstShareOrThrowArgs_1 = require("./args/FindFirstShareOrThrowArgs");
const Share_1 = require("../../../models/Share");
const helpers_1 = require("../../../helpers");
let FindFirstShareOrThrowResolver = class FindFirstShareOrThrowResolver {
    async findFirstShareOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstShareOrThrowResolver = FindFirstShareOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Share_1.Share, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShareOrThrowArgs_1.FindFirstShareOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstShareOrThrowResolver.prototype, "findFirstShareOrThrow", null);
exports.FindFirstShareOrThrowResolver = FindFirstShareOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], FindFirstShareOrThrowResolver);
