"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Post_1 = require("../../../models/Post");
const Share_1 = require("../../../models/Share");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ShareRelationsResolver = class ShareRelationsResolver {
    async User(share, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findUniqueOrThrow({
            where: {
                shareId: share.shareId,
            },
        }).User({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async Post(share, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).share.findUniqueOrThrow({
            where: {
                shareId: share.shareId,
            },
        }).Post({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ShareRelationsResolver = ShareRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Share_1.Share, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareRelationsResolver.prototype, "User", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Share_1.Share, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ShareRelationsResolver.prototype, "Post", null);
exports.ShareRelationsResolver = ShareRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Share_1.Share)
], ShareRelationsResolver);
