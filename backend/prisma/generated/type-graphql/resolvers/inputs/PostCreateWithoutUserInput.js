"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutUserInput = void 0;
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
let PostCreateWithoutUserInput = class PostCreateWithoutUserInput {
};
exports.PostCreateWithoutUserInput = PostCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutUserInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutUserInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutUserInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], PostCreateWithoutUserInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateimagesInput_1.PostCreateimagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateimagesInput_1.PostCreateimagesInput)
], PostCreateWithoutUserInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatetagsInput_1.PostCreatetagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatetagsInput_1.PostCreatetagsInput)
], PostCreateWithoutUserInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateWithoutUserInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutPostInput_1.LikeCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutPostInput_1.LikeCreateNestedManyWithoutPostInput)
], PostCreateWithoutUserInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutPostInput_1.ShareCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutPostInput_1.ShareCreateNestedManyWithoutPostInput)
], PostCreateWithoutUserInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutPostInput_1.BookmarkCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutPostInput_1.BookmarkCreateNestedManyWithoutPostInput)
], PostCreateWithoutUserInput.prototype, "bookmarks", void 0);
exports.PostCreateWithoutUserInput = PostCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutUserInput", {})
], PostCreateWithoutUserInput);
