"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSharesInput_1 = require("../inputs/UserCreateWithoutSharesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSharesInput = class UserCreateOrConnectWithoutSharesInput {
};
exports.UserCreateOrConnectWithoutSharesInput = UserCreateOrConnectWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSharesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput)
], UserCreateOrConnectWithoutSharesInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutSharesInput = UserCreateOrConnectWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSharesInput", {})
], UserCreateOrConnectWithoutSharesInput);
