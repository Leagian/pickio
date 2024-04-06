"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutFollowersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowersInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowersInput");
const UserCreateWithoutFollowersInput_1 = require("../inputs/UserCreateWithoutFollowersInput");
const UserUpdateToOneWithWhereWithoutFollowersInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutFollowersInput");
const UserUpsertWithoutFollowersInput_1 = require("../inputs/UserUpsertWithoutFollowersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutFollowersNestedInput = class UserUpdateOneRequiredWithoutFollowersNestedInput {
};
exports.UserUpdateOneRequiredWithoutFollowersNestedInput = UserUpdateOneRequiredWithoutFollowersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput)
], UserUpdateOneRequiredWithoutFollowersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowersInput_1.UserCreateOrConnectWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutFollowersInput_1.UserCreateOrConnectWithoutFollowersInput)
], UserUpdateOneRequiredWithoutFollowersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutFollowersInput_1.UserUpsertWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutFollowersInput_1.UserUpsertWithoutFollowersInput)
], UserUpdateOneRequiredWithoutFollowersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutFollowersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutFollowersInput_1.UserUpdateToOneWithWhereWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutFollowersInput_1.UserUpdateToOneWithWhereWithoutFollowersInput)
], UserUpdateOneRequiredWithoutFollowersNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutFollowersNestedInput = UserUpdateOneRequiredWithoutFollowersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFollowersNestedInput", {})
], UserUpdateOneRequiredWithoutFollowersNestedInput);
