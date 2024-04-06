"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSharesInput_1 = require("../inputs/UserCreateOrConnectWithoutSharesInput");
const UserCreateWithoutSharesInput_1 = require("../inputs/UserCreateWithoutSharesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSharesInput = class UserCreateNestedOneWithoutSharesInput {
};
exports.UserCreateNestedOneWithoutSharesInput = UserCreateNestedOneWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput)
], UserCreateNestedOneWithoutSharesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSharesInput_1.UserCreateOrConnectWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSharesInput_1.UserCreateOrConnectWithoutSharesInput)
], UserCreateNestedOneWithoutSharesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSharesInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutSharesInput = UserCreateNestedOneWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutSharesInput", {})
], UserCreateNestedOneWithoutSharesInput);
