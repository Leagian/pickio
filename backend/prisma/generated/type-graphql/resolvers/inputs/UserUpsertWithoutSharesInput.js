"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSharesInput_1 = require("../inputs/UserCreateWithoutSharesInput");
const UserUpdateWithoutSharesInput_1 = require("../inputs/UserUpdateWithoutSharesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutSharesInput = class UserUpsertWithoutSharesInput {
};
exports.UserUpsertWithoutSharesInput = UserUpsertWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSharesInput_1.UserUpdateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSharesInput_1.UserUpdateWithoutSharesInput)
], UserUpsertWithoutSharesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSharesInput_1.UserCreateWithoutSharesInput)
], UserUpsertWithoutSharesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutSharesInput.prototype, "where", void 0);
exports.UserUpsertWithoutSharesInput = UserUpsertWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutSharesInput", {})
], UserUpsertWithoutSharesInput);
