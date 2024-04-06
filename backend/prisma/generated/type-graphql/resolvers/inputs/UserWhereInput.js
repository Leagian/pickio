"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkListRelationFilter_1 = require("../inputs/BookmarkListRelationFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const LikeListRelationFilter_1 = require("../inputs/LikeListRelationFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const ShareListRelationFilter_1 = require("../inputs/ShareListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserFollowsListRelationFilter_1 = require("../inputs/UserFollowsListRelationFilter");
let UserWhereInput = class UserWhereInput {
};
exports.UserWhereInput = UserWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], UserWhereInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], UserWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeListRelationFilter_1.LikeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeListRelationFilter_1.LikeListRelationFilter)
], UserWhereInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareListRelationFilter_1.ShareListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareListRelationFilter_1.ShareListRelationFilter)
], UserWhereInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkListRelationFilter_1.BookmarkListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkListRelationFilter_1.BookmarkListRelationFilter)
], UserWhereInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsListRelationFilter_1.UserFollowsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsListRelationFilter_1.UserFollowsListRelationFilter)
], UserWhereInput.prototype, "followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsListRelationFilter_1.UserFollowsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsListRelationFilter_1.UserFollowsListRelationFilter)
], UserWhereInput.prototype, "followings", void 0);
exports.UserWhereInput = UserWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {})
], UserWhereInput);
