"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateManyWithoutUserNestedInput_1 = require("../inputs/BookmarkUpdateManyWithoutUserNestedInput");
const CommentUpdateManyWithoutUserNestedInput_1 = require("../inputs/CommentUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutUserNestedInput_1 = require("../inputs/PostUpdateManyWithoutUserNestedInput");
const ShareUpdateManyWithoutUserNestedInput_1 = require("../inputs/ShareUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserFollowsUpdateManyWithoutFollowerNestedInput_1 = require("../inputs/UserFollowsUpdateManyWithoutFollowerNestedInput");
const UserFollowsUpdateManyWithoutFollowingNestedInput_1 = require("../inputs/UserFollowsUpdateManyWithoutFollowingNestedInput");
let UserUpdateWithoutLikesInput = class UserUpdateWithoutLikesInput {
};
exports.UserUpdateWithoutLikesInput = UserUpdateWithoutLikesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutUserNestedInput_1.PostUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutUserNestedInput_1.PostUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLikesInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLikesInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyWithoutUserNestedInput_1.ShareUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyWithoutUserNestedInput_1.ShareUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLikesInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutUserNestedInput_1.BookmarkUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateManyWithoutUserNestedInput_1.BookmarkUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLikesInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyWithoutFollowerNestedInput_1.UserFollowsUpdateManyWithoutFollowerNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyWithoutFollowerNestedInput_1.UserFollowsUpdateManyWithoutFollowerNestedInput)
], UserUpdateWithoutLikesInput.prototype, "followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyWithoutFollowingNestedInput_1.UserFollowsUpdateManyWithoutFollowingNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyWithoutFollowingNestedInput_1.UserFollowsUpdateManyWithoutFollowingNestedInput)
], UserUpdateWithoutLikesInput.prototype, "followings", void 0);
exports.UserUpdateWithoutLikesInput = UserUpdateWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutLikesInput", {})
], UserUpdateWithoutLikesInput);
