"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutFollowingsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutFollowingsNestedInput");
let UserFollowsUpdateWithoutFollowerInput = class UserFollowsUpdateWithoutFollowerInput {
};
exports.UserFollowsUpdateWithoutFollowerInput = UserFollowsUpdateWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserFollowsUpdateWithoutFollowerInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserFollowsUpdateWithoutFollowerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingsNestedInput_1.UserUpdateOneRequiredWithoutFollowingsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutFollowingsNestedInput_1.UserUpdateOneRequiredWithoutFollowingsNestedInput)
], UserFollowsUpdateWithoutFollowerInput.prototype, "following", void 0);
exports.UserFollowsUpdateWithoutFollowerInput = UserFollowsUpdateWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateWithoutFollowerInput", {})
], UserFollowsUpdateWithoutFollowerInput);
