"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkListRelationFilter_1 = require("../inputs/BookmarkListRelationFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const LikeListRelationFilter_1 = require("../inputs/LikeListRelationFilter");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
const ShareListRelationFilter_1 = require("../inputs/ShareListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereUniqueInput = class PostWhereUniqueInput {
};
exports.PostWhereUniqueInput = PostWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostWhereUniqueInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1.PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1.PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1.PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PostWhereUniqueInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PostWhereUniqueInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], PostWhereUniqueInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], PostWhereUniqueInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], PostWhereUniqueInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PostWhereUniqueInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], PostWhereUniqueInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeListRelationFilter_1.LikeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeListRelationFilter_1.LikeListRelationFilter)
], PostWhereUniqueInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareListRelationFilter_1.ShareListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareListRelationFilter_1.ShareListRelationFilter)
], PostWhereUniqueInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkListRelationFilter_1.BookmarkListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkListRelationFilter_1.BookmarkListRelationFilter)
], PostWhereUniqueInput.prototype, "bookmarks", void 0);
exports.PostWhereUniqueInput = PostWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostWhereUniqueInput", {})
], PostWhereUniqueInput);
