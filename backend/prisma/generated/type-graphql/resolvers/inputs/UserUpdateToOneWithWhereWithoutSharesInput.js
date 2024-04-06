"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutSharesInput_1 = require("../inputs/UserUpdateWithoutSharesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutSharesInput = class UserUpdateToOneWithWhereWithoutSharesInput {
};
exports.UserUpdateToOneWithWhereWithoutSharesInput = UserUpdateToOneWithWhereWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutSharesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSharesInput_1.UserUpdateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSharesInput_1.UserUpdateWithoutSharesInput)
], UserUpdateToOneWithWhereWithoutSharesInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutSharesInput = UserUpdateToOneWithWhereWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutSharesInput", {})
], UserUpdateToOneWithWhereWithoutSharesInput);
