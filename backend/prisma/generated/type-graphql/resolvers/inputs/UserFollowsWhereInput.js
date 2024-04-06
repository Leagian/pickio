"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let UserFollowsWhereInput = class UserFollowsWhereInput {
};
exports.UserFollowsWhereInput = UserFollowsWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserFollowsWhereInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserFollowsWhereInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserFollowsWhereInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserFollowsWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], UserFollowsWhereInput.prototype, "follower", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], UserFollowsWhereInput.prototype, "following", void 0);
exports.UserFollowsWhereInput = UserFollowsWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsWhereInput", {})
], UserFollowsWhereInput);
