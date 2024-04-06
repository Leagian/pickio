"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutFollowingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateNestedManyWithoutUserInput_1 = require("../inputs/BookmarkCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
const PostCreateNestedManyWithoutUserInput_1 = require("../inputs/PostCreateNestedManyWithoutUserInput");
const ShareCreateNestedManyWithoutUserInput_1 = require("../inputs/ShareCreateNestedManyWithoutUserInput");
const UserFollowsCreateNestedManyWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateNestedManyWithoutFollowerInput");
let UserCreateWithoutFollowingsInput = class UserCreateWithoutFollowingsInput {
};
exports.UserCreateWithoutFollowingsInput = UserCreateWithoutFollowingsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowingsInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutFollowingsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowingsInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowingsInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowingsInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowingsInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowingsInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateNestedManyWithoutFollowerInput_1.UserFollowsCreateNestedManyWithoutFollowerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateNestedManyWithoutFollowerInput_1.UserFollowsCreateNestedManyWithoutFollowerInput)
], UserCreateWithoutFollowingsInput.prototype, "followers", void 0);
exports.UserCreateWithoutFollowingsInput = UserCreateWithoutFollowingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutFollowingsInput", {})
], UserCreateWithoutFollowingsInput);
