"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const BookmarkCreateNestedManyWithoutPostInput_1 = require("../inputs/BookmarkCreateNestedManyWithoutPostInput");
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const LikeCreateNestedManyWithoutPostInput_1 = require("../inputs/LikeCreateNestedManyWithoutPostInput");
const PostCreateimagesInput_1 = require("../inputs/PostCreateimagesInput");
const PostCreatetagsInput_1 = require("../inputs/PostCreatetagsInput");
const ShareCreateNestedManyWithoutPostInput_1 = require("../inputs/ShareCreateNestedManyWithoutPostInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
let PostCreateInput = class PostCreateInput {
};
exports.PostCreateInput = PostCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], PostCreateInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateimagesInput_1.PostCreateimagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateimagesInput_1.PostCreateimagesInput)
], PostCreateInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatetagsInput_1.PostCreatetagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatetagsInput_1.PostCreatetagsInput)
], PostCreateInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutPostInput_1.LikeCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutPostInput_1.LikeCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutPostInput_1.ShareCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutPostInput_1.ShareCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutPostInput_1.BookmarkCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutPostInput_1.BookmarkCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "bookmarks", void 0);
exports.PostCreateInput = PostCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateInput", {})
], PostCreateInput);
