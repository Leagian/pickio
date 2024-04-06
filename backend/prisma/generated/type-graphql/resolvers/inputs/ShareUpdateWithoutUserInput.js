"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutSharesNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutSharesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ShareUpdateWithoutUserInput = class ShareUpdateWithoutUserInput {
};
exports.ShareUpdateWithoutUserInput = ShareUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ShareUpdateWithoutUserInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ShareUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutSharesNestedInput_1.PostUpdateOneRequiredWithoutSharesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutSharesNestedInput_1.PostUpdateOneRequiredWithoutSharesNestedInput)
], ShareUpdateWithoutUserInput.prototype, "Post", void 0);
exports.ShareUpdateWithoutUserInput = ShareUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateWithoutUserInput", {})
], ShareUpdateWithoutUserInput);
