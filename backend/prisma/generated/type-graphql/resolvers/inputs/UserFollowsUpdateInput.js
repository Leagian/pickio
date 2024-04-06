"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutFollowersNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutFollowersNestedInput");
const UserUpdateOneRequiredWithoutFollowingsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutFollowingsNestedInput");
let UserFollowsUpdateInput = class UserFollowsUpdateInput {
};
exports.UserFollowsUpdateInput = UserFollowsUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserFollowsUpdateInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserFollowsUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersNestedInput_1.UserUpdateOneRequiredWithoutFollowersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutFollowersNestedInput_1.UserUpdateOneRequiredWithoutFollowersNestedInput)
], UserFollowsUpdateInput.prototype, "follower", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingsNestedInput_1.UserUpdateOneRequiredWithoutFollowingsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutFollowingsNestedInput_1.UserUpdateOneRequiredWithoutFollowingsNestedInput)
], UserFollowsUpdateInput.prototype, "following", void 0);
exports.UserFollowsUpdateInput = UserFollowsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateInput", {})
], UserFollowsUpdateInput);
