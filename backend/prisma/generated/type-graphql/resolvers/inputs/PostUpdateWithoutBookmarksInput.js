"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const CommentUpdateManyWithoutPostNestedInput_1 = require("../inputs/CommentUpdateManyWithoutPostNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LikeUpdateManyWithoutPostNestedInput_1 = require("../inputs/LikeUpdateManyWithoutPostNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateimagesInput_1 = require("../inputs/PostUpdateimagesInput");
const PostUpdatetagsInput_1 = require("../inputs/PostUpdatetagsInput");
const ShareUpdateManyWithoutPostNestedInput_1 = require("../inputs/ShareUpdateManyWithoutPostNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPostsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsNestedInput");
let PostUpdateWithoutBookmarksInput = class PostUpdateWithoutBookmarksInput {
};
exports.PostUpdateWithoutBookmarksInput = PostUpdateWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutBookmarksInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutBookmarksInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutBookmarksInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], PostUpdateWithoutBookmarksInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateimagesInput_1.PostUpdateimagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateimagesInput_1.PostUpdateimagesInput)
], PostUpdateWithoutBookmarksInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdatetagsInput_1.PostUpdatetagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdatetagsInput_1.PostUpdatetagsInput)
], PostUpdateWithoutBookmarksInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutBookmarksInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsNestedInput_1.UserUpdateOneRequiredWithoutPostsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsNestedInput_1.UserUpdateOneRequiredWithoutPostsNestedInput)
], PostUpdateWithoutBookmarksInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostNestedInput_1.CommentUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostNestedInput_1.CommentUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutBookmarksInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutPostNestedInput_1.LikeUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutPostNestedInput_1.LikeUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutBookmarksInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyWithoutPostNestedInput_1.ShareUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyWithoutPostNestedInput_1.ShareUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutBookmarksInput.prototype, "shares", void 0);
exports.PostUpdateWithoutBookmarksInput = PostUpdateWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutBookmarksInput", {})
], PostUpdateWithoutBookmarksInput);
