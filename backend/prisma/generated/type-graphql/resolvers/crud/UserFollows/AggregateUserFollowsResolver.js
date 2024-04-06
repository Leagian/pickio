"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserFollowsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUserFollowsArgs_1 = require("./args/AggregateUserFollowsArgs");
const UserFollows_1 = require("../../../models/UserFollows");
const AggregateUserFollows_1 = require("../../outputs/AggregateUserFollows");
const helpers_1 = require("../../../helpers");
let AggregateUserFollowsResolver = class AggregateUserFollowsResolver {
    async aggregateUserFollows(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userFollows.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateUserFollowsResolver = AggregateUserFollowsResolver;
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
], AggregateUserFollowsResolver.prototype, "aggregateUserFollows", null);
exports.AggregateUserFollowsResolver = AggregateUserFollowsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserFollows_1.UserFollows)
], AggregateUserFollowsResolver);
