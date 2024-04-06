"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowersInput_1 = require("../inputs/UserCreateWithoutFollowersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutFollowersInput = class UserCreateOrConnectWithoutFollowersInput {
};
exports.UserCreateOrConnectWithoutFollowersInput = UserCreateOrConnectWithoutFollowersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutFollowersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput)
], UserCreateOrConnectWithoutFollowersInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutFollowersInput = UserCreateOrConnectWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowersInput", {})
], UserCreateOrConnectWithoutFollowersInput);
