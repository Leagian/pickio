"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLikesNestedInput");
let LikeUpdateWithoutPostInput = class LikeUpdateWithoutPostInput {
};
exports.LikeUpdateWithoutPostInput = LikeUpdateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateWithoutPostInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LikeUpdateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateWithoutPostInput.prototype, "User", void 0);
exports.LikeUpdateWithoutPostInput = LikeUpdateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithoutPostInput", {})
], LikeUpdateWithoutPostInput);
