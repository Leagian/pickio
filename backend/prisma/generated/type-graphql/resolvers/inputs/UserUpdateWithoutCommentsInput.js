"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkUpdateManyWithoutUserNestedInput_1 = require("../inputs/BookmarkUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LikeUpdateManyWithoutUserNestedInput_1 = require("../inputs/LikeUpdateManyWithoutUserNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutUserNestedInput_1 = require("../inputs/PostUpdateManyWithoutUserNestedInput");
const ShareUpdateManyWithoutUserNestedInput_1 = require("../inputs/ShareUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserFollowsUpdateManyWithoutFollowerNestedInput_1 = require("../inputs/UserFollowsUpdateManyWithoutFollowerNestedInput");
const UserFollowsUpdateManyWithoutFollowingNestedInput_1 = require("../inputs/UserFollowsUpdateManyWithoutFollowingNestedInput");
let UserUpdateWithoutCommentsInput = class UserUpdateWithoutCommentsInput {
};
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "interests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutUserNestedInput_1.PostUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutUserNestedInput_1.PostUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyWithoutUserNestedInput_1.ShareUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyWithoutUserNestedInput_1.ShareUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "shares", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutUserNestedInput_1.BookmarkUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkUpdateManyWithoutUserNestedInput_1.BookmarkUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "bookmarks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyWithoutFollowerNestedInput_1.UserFollowsUpdateManyWithoutFollowerNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyWithoutFollowerNestedInput_1.UserFollowsUpdateManyWithoutFollowerNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyWithoutFollowingNestedInput_1.UserFollowsUpdateManyWithoutFollowingNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyWithoutFollowingNestedInput_1.UserFollowsUpdateManyWithoutFollowingNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "followings", void 0);
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {})
], UserUpdateWithoutCommentsInput);
