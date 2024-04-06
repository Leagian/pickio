"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const BookmarkCreateNestedManyWithoutPostInput_1 = require("../inputs/BookmarkCreateNestedManyWithoutPostInput");
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const PostCreateimagesInput_1 = require("../inputs/PostCreateimagesInput");
const PostCreatetagsInput_1 = require("../inputs/PostCreatetagsInput");
const ShareCreateNestedManyWithoutPostInput_1 = require("../inputs/ShareCreateNestedManyWithoutPostInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
let PostCreateWithoutLikesInput = class PostCreateWithoutLikesInput {
};
exports.PostCreateWithoutLikesInput = PostCreateWithoutLikesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLikesInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLikesInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLikesInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], PostCreateWithoutLikesInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateimagesInput_1.PostCreateimagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateimagesInput_1.PostCreateimagesInput)
], PostCreateWithoutLikesInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatetagsInput_1.PostCreatetagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatetagsInput_1.PostCreatetagsInput)
], PostCreateWithoutLikesInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutLikesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateWithoutLikesInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateWithoutLikesInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutPostInput_1.ShareCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutPostInput_1.ShareCreateNestedManyWithoutPostInput)
], PostCreateWithoutLikesInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutPostInput_1.BookmarkCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutPostInput_1.BookmarkCreateNestedManyWithoutPostInput)
], PostCreateWithoutLikesInput.prototype, "bookmarks", void 0);
exports.PostCreateWithoutLikesInput = PostCreateWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutLikesInput", {})
], PostCreateWithoutLikesInput);
