"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSharesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSharesInput_1 = require("../inputs/UserCreateOrConnectWithoutSharesInput");
const UserCreateWithoutSharesInput_1 = require("../inputs/UserCreateWithoutSharesInput");
const UserUpdateToOneWithWhereWithoutSharesInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutSharesInput");
const UserUpsertWithoutSharesInput_1 = require("../inputs/UserUpsertWithoutSharesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSharesNestedInput = class UserUpdateOneRequiredWithoutSharesNestedInput {
};
exports.UserUpdateOneRequiredWithoutSharesNestedInput = UserUpdateOneRequiredWithoutSharesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput)
], UserUpdateOneRequiredWithoutSharesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSharesInput_1.UserCreateOrConnectWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSharesInput_1.UserCreateOrConnectWithoutSharesInput)
], UserUpdateOneRequiredWithoutSharesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutSharesInput_1.UserUpsertWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutSharesInput_1.UserUpsertWithoutSharesInput)
], UserUpdateOneRequiredWithoutSharesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutSharesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutSharesInput_1.UserUpdateToOneWithWhereWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutSharesInput_1.UserUpdateToOneWithWhereWithoutSharesInput)
], UserUpdateOneRequiredWithoutSharesNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutSharesNestedInput = UserUpdateOneRequiredWithoutSharesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSharesNestedInput", {})
], UserUpdateOneRequiredWithoutSharesNestedInput);
