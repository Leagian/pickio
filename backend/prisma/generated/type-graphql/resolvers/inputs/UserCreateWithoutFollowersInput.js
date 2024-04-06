"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateNestedManyWithoutUserInput_1 = require("../inputs/BookmarkCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
const PostCreateNestedManyWithoutUserInput_1 = require("../inputs/PostCreateNestedManyWithoutUserInput");
const ShareCreateNestedManyWithoutUserInput_1 = require("../inputs/ShareCreateNestedManyWithoutUserInput");
const UserFollowsCreateNestedManyWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateNestedManyWithoutFollowingInput");
let UserCreateWithoutFollowersInput = class UserCreateWithoutFollowersInput {
};
exports.UserCreateWithoutFollowersInput = UserCreateWithoutFollowersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutFollowersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateNestedManyWithoutFollowingInput_1.UserFollowsCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateNestedManyWithoutFollowingInput_1.UserFollowsCreateNestedManyWithoutFollowingInput)
], UserCreateWithoutFollowersInput.prototype, "followings", void 0);
exports.UserCreateWithoutFollowersInput = UserCreateWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutFollowersInput", {})
], UserCreateWithoutFollowersInput);
