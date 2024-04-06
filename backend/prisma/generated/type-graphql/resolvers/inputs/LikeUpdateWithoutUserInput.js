"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutLikesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LikeUpdateWithoutUserInput = class LikeUpdateWithoutUserInput {
};
exports.LikeUpdateWithoutUserInput = LikeUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateWithoutUserInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LikeUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutLikesNestedInput_1.PostUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutLikesNestedInput_1.PostUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateWithoutUserInput.prototype, "Post", void 0);
exports.LikeUpdateWithoutUserInput = LikeUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithoutUserInput", {})
], LikeUpdateWithoutUserInput);
