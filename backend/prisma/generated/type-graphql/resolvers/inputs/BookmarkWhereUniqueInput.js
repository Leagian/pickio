"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkWhereInput_1 = require("../inputs/BookmarkWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PostRelationFilter_1 = require("../inputs/PostRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let BookmarkWhereUniqueInput = class BookmarkWhereUniqueInput {
};
exports.BookmarkWhereUniqueInput = BookmarkWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookmarkWhereUniqueInput.prototype, "bookmarkId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereInput_1.BookmarkWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereInput_1.BookmarkWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkWhereInput_1.BookmarkWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookmarkWhereUniqueInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookmarkWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookmarkWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], BookmarkWhereUniqueInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostRelationFilter_1.PostRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostRelationFilter_1.PostRelationFilter)
], BookmarkWhereUniqueInput.prototype, "Post", void 0);
exports.BookmarkWhereUniqueInput = BookmarkWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkWhereUniqueInput", {})
], BookmarkWhereUniqueInput);
