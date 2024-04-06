"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutLikesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLikesNestedInput");
let LikeUpdateInput = class LikeUpdateInput {
};
exports.LikeUpdateInput = LikeUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LikeUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutLikesNestedInput_1.PostUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutLikesNestedInput_1.PostUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateInput.prototype, "Post", void 0);
exports.LikeUpdateInput = LikeUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateInput", {})
], LikeUpdateInput);
