"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutFollowingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFollowingsInput_1 = require("../inputs/UserCreateWithoutFollowingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutFollowingsInput = class UserCreateOrConnectWithoutFollowingsInput {
};
exports.UserCreateOrConnectWithoutFollowingsInput = UserCreateOrConnectWithoutFollowingsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutFollowingsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput)
], UserCreateOrConnectWithoutFollowingsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutFollowingsInput = UserCreateOrConnectWithoutFollowingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowingsInput", {})
], UserCreateOrConnectWithoutFollowingsInput);
