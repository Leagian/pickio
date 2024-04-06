"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowersInput_1 = require("../inputs/UserCreateWithoutFollowersInput");
const UserUpdateWithoutFollowersInput_1 = require("../inputs/UserUpdateWithoutFollowersInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutFollowersInput = class UserUpsertWithoutFollowersInput {
};
exports.UserUpsertWithoutFollowersInput = UserUpsertWithoutFollowersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput)
], UserUpsertWithoutFollowersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput)
], UserUpsertWithoutFollowersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutFollowersInput.prototype, "where", void 0);
exports.UserUpsertWithoutFollowersInput = UserUpsertWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutFollowersInput", {})
], UserUpsertWithoutFollowersInput);
