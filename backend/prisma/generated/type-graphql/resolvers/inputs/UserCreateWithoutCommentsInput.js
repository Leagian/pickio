"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateNestedManyWithoutUserInput_1 = require("../inputs/BookmarkCreateNestedManyWithoutUserInput");
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
const PostCreateNestedManyWithoutUserInput_1 = require("../inputs/PostCreateNestedManyWithoutUserInput");
const ShareCreateNestedManyWithoutUserInput_1 = require("../inputs/ShareCreateNestedManyWithoutUserInput");
const UserFollowsCreateNestedManyWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateNestedManyWithoutFollowerInput");
const UserFollowsCreateNestedManyWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateNestedManyWithoutFollowingInput");
let UserCreateWithoutCommentsInput = class UserCreateWithoutCommentsInput {
};
exports.UserCreateWithoutCommentsInput = UserCreateWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput)
], UserCreateWithoutCommentsInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateWithoutCommentsInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateNestedManyWithoutUserInput_1.ShareCreateNestedManyWithoutUserInput)
], UserCreateWithoutCommentsInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkCreateNestedManyWithoutUserInput_1.BookmarkCreateNestedManyWithoutUserInput)
], UserCreateWithoutCommentsInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateNestedManyWithoutFollowerInput_1.UserFollowsCreateNestedManyWithoutFollowerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateNestedManyWithoutFollowerInput_1.UserFollowsCreateNestedManyWithoutFollowerInput)
], UserCreateWithoutCommentsInput.prototype, "followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateNestedManyWithoutFollowingInput_1.UserFollowsCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateNestedManyWithoutFollowingInput_1.UserFollowsCreateNestedManyWithoutFollowingInput)
], UserCreateWithoutCommentsInput.prototype, "followings", void 0);
exports.UserCreateWithoutCommentsInput = UserCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutCommentsInput", {})
], UserCreateWithoutCommentsInput);
