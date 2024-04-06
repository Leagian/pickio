"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueShareArgs_1 = require("./args/FindUniqueShareArgs");
const Share_1 = require("../../../models/Share");
const helpers_1 = require("../../../helpers");
let FindUniqueShareResolver = class FindUniqueShareResolver {
    async share(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueShareResolver = FindUniqueShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Share_1.Share, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShareArgs_1.FindUniqueShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueShareResolver.prototype, "share", null);
exports.FindUniqueShareResolver = FindUniqueShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], FindUniqueShareResolver);
