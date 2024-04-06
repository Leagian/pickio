"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyShareArgs_1 = require("./args/FindManyShareArgs");
const Share_1 = require("../../../models/Share");
const helpers_1 = require("../../../helpers");
let FindManyShareResolver = class FindManyShareResolver {
    async shares(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyShareResolver = FindManyShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Share_1.Share], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShareArgs_1.FindManyShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyShareResolver.prototype, "shares", null);
exports.FindManyShareResolver = FindManyShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], FindManyShareResolver);
