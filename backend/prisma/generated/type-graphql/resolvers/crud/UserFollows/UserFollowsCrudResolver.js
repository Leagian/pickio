"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUserFollowsArgs_1 = require("./args/AggregateUserFollowsArgs");
const CreateManyUserFollowsArgs_1 = require("./args/CreateManyUserFollowsArgs");
const CreateOneUserFollowsArgs_1 = require("./args/CreateOneUserFollowsArgs");
const DeleteManyUserFollowsArgs_1 = require("./args/DeleteManyUserFollowsArgs");
const DeleteOneUserFollowsArgs_1 = require("./args/DeleteOneUserFollowsArgs");
const FindFirstUserFollowsArgs_1 = require("./args/FindFirstUserFollowsArgs");
const FindFirstUserFollowsOrThrowArgs_1 = require("./args/FindFirstUserFollowsOrThrowArgs");
const FindManyUserFollowsArgs_1 = require("./args/FindManyUserFollowsArgs");
const FindUniqueUserFollowsArgs_1 = require("./args/FindUniqueUserFollowsArgs");
const FindUniqueUserFollowsOrThrowArgs_1 = require("./args/FindUniqueUserFollowsOrThrowArgs");
const GroupByUserFollowsArgs_1 = require("./args/GroupByUserFollowsArgs");
const UpdateManyUserFollowsArgs_1 = require("./args/UpdateManyUserFollowsArgs");
const UpdateOneUserFollowsArgs_1 = require("./args/UpdateOneUserFollowsArgs");
const UpsertOneUserFollowsArgs_1 = require("./args/UpsertOneUserFollowsArgs");
const helpers_1 = require("../../../helpers");
const UserFollows_1 = require("../../../models/UserFollows");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserFollows_1 = require("../../outputs/AggregateUserFollows");
const UserFollowsGroupBy_1 = require("../../outputs/UserFollowsGroupBy");
let UserFollowsCrudResolver = class UserFollowsCrudResolver {
    async aggregateUserFollows(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUserFollowsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueUserFollowsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUserFollows(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUserFollows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UserFollowsCrudResolver = UserFollowsCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUserFollows_1.AggregateUserFollows, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUserFollowsArgs_1.AggregateUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "aggregateUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUserFollowsArgs_1.CreateManyUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "createManyUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserFollows_1.UserFollows, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUserFollowsArgs_1.CreateOneUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "createOneUserFollows", null);
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
], UserFollowsCrudResolver.prototype, "deleteManyUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUserFollowsArgs_1.DeleteOneUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "deleteOneUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserFollowsArgs_1.FindFirstUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "findFirstUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserFollowsOrThrowArgs_1.FindFirstUserFollowsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "findFirstUserFollowsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserFollows_1.UserFollows], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUserFollowsArgs_1.FindManyUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "findManyUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserFollowsArgs_1.FindUniqueUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "findUniqueUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserFollowsOrThrowArgs_1.FindUniqueUserFollowsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "findUniqueUserFollowsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserFollowsGroupBy_1.UserFollowsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUserFollowsArgs_1.GroupByUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "groupByUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUserFollowsArgs_1.UpdateManyUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "updateManyUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserFollows_1.UserFollows, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserFollowsArgs_1.UpdateOneUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "updateOneUserFollows", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserFollows_1.UserFollows, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUserFollowsArgs_1.UpsertOneUserFollowsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFollowsCrudResolver.prototype, "upsertOneUserFollows", null);
exports.UserFollowsCrudResolver = UserFollowsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], UserFollowsCrudResolver);
