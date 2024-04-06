"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutFollowersNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutFollowersNestedInput");
let UserFollowsUpdateWithoutFollowingInput = class UserFollowsUpdateWithoutFollowingInput {
};
exports.UserFollowsUpdateWithoutFollowingInput = UserFollowsUpdateWithoutFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserFollowsUpdateWithoutFollowingInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserFollowsUpdateWithoutFollowingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersNestedInput_1.UserUpdateOneRequiredWithoutFollowersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutFollowersNestedInput_1.UserUpdateOneRequiredWithoutFollowersNestedInput)
], UserFollowsUpdateWithoutFollowingInput.prototype, "follower", void 0);
exports.UserFollowsUpdateWithoutFollowingInput = UserFollowsUpdateWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateWithoutFollowingInput", {})
], UserFollowsUpdateWithoutFollowingInput);
