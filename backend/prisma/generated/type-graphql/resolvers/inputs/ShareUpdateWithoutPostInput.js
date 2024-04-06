"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSharesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSharesNestedInput");
let ShareUpdateWithoutPostInput = class ShareUpdateWithoutPostInput {
};
exports.ShareUpdateWithoutPostInput = ShareUpdateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ShareUpdateWithoutPostInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ShareUpdateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSharesNestedInput_1.UserUpdateOneRequiredWithoutSharesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSharesNestedInput_1.UserUpdateOneRequiredWithoutSharesNestedInput)
], ShareUpdateWithoutPostInput.prototype, "User", void 0);
exports.ShareUpdateWithoutPostInput = ShareUpdateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateWithoutPostInput", {})
], ShareUpdateWithoutPostInput);
