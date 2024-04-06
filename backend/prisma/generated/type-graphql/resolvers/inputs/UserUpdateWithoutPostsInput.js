"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateManyWithoutUserNestedInput_1 = require("../inputs/BookmarkUpdateManyWithoutUserNestedInput");
const CommentUpdateManyWithoutUserNestedInput_1 = require("../inputs/CommentUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LikeUpdateManyWithoutUserNestedInput_1 = require("../inputs/LikeUpdateManyWithoutUserNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ShareUpdateManyWithoutUserNestedInput_1 = require("../inputs/ShareUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserFollowsUpdateManyWithoutFollowerNestedInput_1 = require("../inputs/UserFollowsUpdateManyWithoutFollowerNestedInput");
const UserFollowsUpdateManyWithoutFollowingNestedInput_1 = require("../inputs/UserFollowsUpdateManyWithoutFollowingNestedInput");
let UserUpdateWithoutPostsInput = class UserUpdateWithoutPostsInput {
};
exports.UserUpdateWithoutPostsInput = UserUpdateWithoutPostsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutPostsInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutPostsInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyWithoutUserNestedInput_1.ShareUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyWithoutUserNestedInput_1.ShareUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutPostsInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutUserNestedInput_1.BookmarkUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateManyWithoutUserNestedInput_1.BookmarkUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutPostsInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyWithoutFollowerNestedInput_1.UserFollowsUpdateManyWithoutFollowerNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyWithoutFollowerNestedInput_1.UserFollowsUpdateManyWithoutFollowerNestedInput)
], UserUpdateWithoutPostsInput.prototype, "followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyWithoutFollowingNestedInput_1.UserFollowsUpdateManyWithoutFollowingNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyWithoutFollowingNestedInput_1.UserFollowsUpdateManyWithoutFollowingNestedInput)
], UserUpdateWithoutPostsInput.prototype, "followings", void 0);
exports.UserUpdateWithoutPostsInput = UserUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutPostsInput", {})
], UserUpdateWithoutPostsInput);
