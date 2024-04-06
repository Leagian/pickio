"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateShareArgs_1 = require("./args/AggregateShareArgs");
const CreateManyShareArgs_1 = require("./args/CreateManyShareArgs");
const CreateOneShareArgs_1 = require("./args/CreateOneShareArgs");
const DeleteManyShareArgs_1 = require("./args/DeleteManyShareArgs");
const DeleteOneShareArgs_1 = require("./args/DeleteOneShareArgs");
const FindFirstShareArgs_1 = require("./args/FindFirstShareArgs");
const FindFirstShareOrThrowArgs_1 = require("./args/FindFirstShareOrThrowArgs");
const FindManyShareArgs_1 = require("./args/FindManyShareArgs");
const FindUniqueShareArgs_1 = require("./args/FindUniqueShareArgs");
const FindUniqueShareOrThrowArgs_1 = require("./args/FindUniqueShareOrThrowArgs");
const GroupByShareArgs_1 = require("./args/GroupByShareArgs");
const UpdateManyShareArgs_1 = require("./args/UpdateManyShareArgs");
const UpdateOneShareArgs_1 = require("./args/UpdateOneShareArgs");
const UpsertOneShareArgs_1 = require("./args/UpsertOneShareArgs");
const helpers_1 = require("../../../helpers");
const Share_1 = require("../../../models/Share");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateShare_1 = require("../../outputs/AggregateShare");
const ShareGroupBy_1 = require("../../outputs/ShareGroupBy");
let ShareCrudResolver = class ShareCrudResolver {
    async aggregateShare(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).share.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShareOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async shares(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async share(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByShare(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneShare(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ShareCrudResolver = ShareCrudResolver;
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
], ShareCrudResolver.prototype, "aggregateShare", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShareArgs_1.CreateManyShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "createManyShare", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Share_1.Share, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneShareArgs_1.CreateOneShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "createOneShare", null);
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
], ShareCrudResolver.prototype, "deleteManyShare", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Share_1.Share, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneShareArgs_1.DeleteOneShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "deleteOneShare", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Share_1.Share, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShareArgs_1.FindFirstShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "findFirstShare", null);
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
], ShareCrudResolver.prototype, "findFirstShareOrThrow", null);
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
], ShareCrudResolver.prototype, "shares", null);
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
], ShareCrudResolver.prototype, "share", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Share_1.Share, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShareOrThrowArgs_1.FindUniqueShareOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "getShare", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShareGroupBy_1.ShareGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShareArgs_1.GroupByShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "groupByShare", null);
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
], ShareCrudResolver.prototype, "updateManyShare", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Share_1.Share, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneShareArgs_1.UpdateOneShareArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareCrudResolver.prototype, "updateOneShare", null);
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
], ShareCrudResolver.prototype, "upsertOneShare", null);
exports.ShareCrudResolver = ShareCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], ShareCrudResolver);
