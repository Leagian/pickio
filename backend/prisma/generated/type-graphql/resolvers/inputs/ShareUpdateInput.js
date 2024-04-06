"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutSharesNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutSharesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSharesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSharesNestedInput");
let ShareUpdateInput = class ShareUpdateInput {
};
exports.ShareUpdateInput = ShareUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ShareUpdateInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ShareUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSharesNestedInput_1.UserUpdateOneRequiredWithoutSharesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSharesNestedInput_1.UserUpdateOneRequiredWithoutSharesNestedInput)
], ShareUpdateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutSharesNestedInput_1.PostUpdateOneRequiredWithoutSharesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutSharesNestedInput_1.PostUpdateOneRequiredWithoutSharesNestedInput)
], ShareUpdateInput.prototype, "Post", void 0);
exports.ShareUpdateInput = ShareUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateInput", {})
], ShareUpdateInput);
