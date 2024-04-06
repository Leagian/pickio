"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Like_1 = require("../../../models/Like");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let LikeRelationsResolver = class LikeRelationsResolver {
    async User(like, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUniqueOrThrow({
            where: {
                likeId: like.likeId,
            },
        }).User({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async Post(like, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUniqueOrThrow({
            where: {
                likeId: like.likeId,
            },
        }).Post({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.LikeRelationsResolver = LikeRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Like_1.Like, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeRelationsResolver.prototype, "User", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Like_1.Like, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeRelationsResolver.prototype, "Post", null);
exports.LikeRelationsResolver = LikeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], LikeRelationsResolver);
