"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutFollowingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutFollowingsInput_1 = require("../inputs/UserUpdateWithoutFollowingsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutFollowingsInput = class UserUpdateToOneWithWhereWithoutFollowingsInput {
};
exports.UserUpdateToOneWithWhereWithoutFollowingsInput = UserUpdateToOneWithWhereWithoutFollowingsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutFollowingsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFollowingsInput_1.UserUpdateWithoutFollowingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFollowingsInput_1.UserUpdateWithoutFollowingsInput)
], UserUpdateToOneWithWhereWithoutFollowingsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutFollowingsInput = UserUpdateToOneWithWhereWithoutFollowingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutFollowingsInput", {})
], UserUpdateToOneWithWhereWithoutFollowingsInput);
