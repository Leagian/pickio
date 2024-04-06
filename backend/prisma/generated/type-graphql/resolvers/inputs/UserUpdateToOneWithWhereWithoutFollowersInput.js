"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutFollowersInput_1 = require("../inputs/UserUpdateWithoutFollowersInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutFollowersInput = class UserUpdateToOneWithWhereWithoutFollowersInput {
};
exports.UserUpdateToOneWithWhereWithoutFollowersInput = UserUpdateToOneWithWhereWithoutFollowersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutFollowersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowersInput_1.UserUpdateWithoutFollowersInput)
], UserUpdateToOneWithWhereWithoutFollowersInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutFollowersInput = UserUpdateToOneWithWhereWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutFollowersInput", {})
], UserUpdateToOneWithWhereWithoutFollowersInput);
