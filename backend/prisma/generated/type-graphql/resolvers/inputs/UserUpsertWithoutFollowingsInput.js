"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutFollowingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowingsInput_1 = require("../inputs/UserCreateWithoutFollowingsInput");
const UserUpdateWithoutFollowingsInput_1 = require("../inputs/UserUpdateWithoutFollowingsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutFollowingsInput = class UserUpsertWithoutFollowingsInput {
};
exports.UserUpsertWithoutFollowingsInput = UserUpsertWithoutFollowingsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowingsInput_1.UserUpdateWithoutFollowingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowingsInput_1.UserUpdateWithoutFollowingsInput)
], UserUpsertWithoutFollowingsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput)
], UserUpsertWithoutFollowingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutFollowingsInput.prototype, "where", void 0);
exports.UserUpsertWithoutFollowingsInput = UserUpsertWithoutFollowingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutFollowingsInput", {})
], UserUpsertWithoutFollowingsInput);
