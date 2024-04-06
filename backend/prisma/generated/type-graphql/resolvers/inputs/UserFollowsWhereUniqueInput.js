"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserFollowsFollowerIdFollowingIdCompoundUniqueInput_1 = require("../inputs/UserFollowsFollowerIdFollowingIdCompoundUniqueInput");
const UserFollowsWhereInput_1 = require("../inputs/UserFollowsWhereInput");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let UserFollowsWhereUniqueInput = class UserFollowsWhereUniqueInput {
};
exports.UserFollowsWhereUniqueInput = UserFollowsWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsWhereUniqueInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsFollowerIdFollowingIdCompoundUniqueInput_1.UserFollowsFollowerIdFollowingIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsFollowerIdFollowingIdCompoundUniqueInput_1.UserFollowsFollowerIdFollowingIdCompoundUniqueInput)
], UserFollowsWhereUniqueInput.prototype, "followerId_followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereInput_1.UserFollowsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereInput_1.UserFollowsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereInput_1.UserFollowsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserFollowsWhereUniqueInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserFollowsWhereUniqueInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserFollowsWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], UserFollowsWhereUniqueInput.prototype, "follower", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], UserFollowsWhereUniqueInput.prototype, "following", void 0);
exports.UserFollowsWhereUniqueInput = UserFollowsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsWhereUniqueInput", {})
], UserFollowsWhereUniqueInput);
