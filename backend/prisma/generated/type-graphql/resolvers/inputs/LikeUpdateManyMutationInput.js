"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LikeUpdateManyMutationInput = class LikeUpdateManyMutationInput {
};
exports.LikeUpdateManyMutationInput = LikeUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateManyMutationInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LikeUpdateManyMutationInput.prototype, "createdAt", void 0);
exports.LikeUpdateManyMutationInput = LikeUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateManyMutationInput", {})
], LikeUpdateManyMutationInput);
