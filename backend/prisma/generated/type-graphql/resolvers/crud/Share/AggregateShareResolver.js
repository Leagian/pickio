"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShareResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateShareArgs_1 = require("./args/AggregateShareArgs");
const Share_1 = require("../../../models/Share");
const AggregateShare_1 = require("../../outputs/AggregateShare");
const helpers_1 = require("../../../helpers");
let AggregateShareResolver = class AggregateShareResolver {
    async aggregateShare(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).share.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateShareResolver = AggregateShareResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShare_1.AggregateShare, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShareArgs_1.AggregateShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateShareResolver.prototype, "aggregateShare", null);
exports.AggregateShareResolver = AggregateShareResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], AggregateShareResolver);
