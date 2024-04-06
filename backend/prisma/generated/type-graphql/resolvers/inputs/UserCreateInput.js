"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateNestedManyWithoutUserInput_1 = require("../inputs/BookmarkCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
const PostCreateNestedManyWithoutUserInput_1 = require("../inputs/PostCreateNestedManyWithoutUserInput");
const ShareCreateNestedManyWithoutUserInput_1 = require("../inputs/ShareCreateNestedManyWithoutUserInput");
const UserFollowsCreateNestedManyWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateNestedManyWithoutFollowerInput");
const UserFollowsCreateNestedManyWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateNestedManyWithoutFollowingInput");
let UserCreateInput = class UserCreateInput {
};
exports.UserCreateInput = UserCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateNestedManyWithoutFollowerInput_1.UserFollowsCreateNestedManyWithoutFollowerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateNestedManyWithoutFollowerInput_1.UserFollowsCreateNestedManyWithoutFollowerInput)
], UserCreateInput.prototype, "followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateNestedManyWithoutFollowingInput_1.UserFollowsCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateNestedManyWithoutFollowingInput_1.UserFollowsCreateNestedManyWithoutFollowingInput)
], UserCreateInput.prototype, "followings", void 0);
exports.UserCreateInput = UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {})
], UserCreateInput);
