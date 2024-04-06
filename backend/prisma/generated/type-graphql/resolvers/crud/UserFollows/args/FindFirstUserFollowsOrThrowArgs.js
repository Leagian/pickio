"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserFollowsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsOrderByWithRelationInput_1 = require("../../../inputs/UserFollowsOrderByWithRelationInput");
const UserFollowsWhereInput_1 = require("../../../inputs/UserFollowsWhereInput");
const UserFollowsWhereUniqueInput_1 = require("../../../inputs/UserFollowsWhereUniqueInput");
const UserFollowsScalarFieldEnum_1 = require("../../../../enums/UserFollowsScalarFieldEnum");
let FindFirstUserFollowsOrThrowArgs = class FindFirstUserFollowsOrThrowArgs {
};
exports.FindFirstUserFollowsOrThrowArgs = FindFirstUserFollowsOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], FindFirstUserFollowsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsOrderByWithRelationInput_1.UserFollowsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUserFollowsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], FindFirstUserFollowsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUserFollowsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUserFollowsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsScalarFieldEnum_1.UserFollowsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUserFollowsOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstUserFollowsOrThrowArgs = FindFirstUserFollowsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUserFollowsOrThrowArgs);
