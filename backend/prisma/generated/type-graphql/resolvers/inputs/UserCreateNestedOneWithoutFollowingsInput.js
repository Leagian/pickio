"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutFollowingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowingsInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowingsInput");
const UserCreateWithoutFollowingsInput_1 = require("../inputs/UserCreateWithoutFollowingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutFollowingsInput = class UserCreateNestedOneWithoutFollowingsInput {
};
exports.UserCreateNestedOneWithoutFollowingsInput = UserCreateNestedOneWithoutFollowingsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput)
], UserCreateNestedOneWithoutFollowingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowingsInput_1.UserCreateOrConnectWithoutFollowingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutFollowingsInput_1.UserCreateOrConnectWithoutFollowingsInput)
], UserCreateNestedOneWithoutFollowingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutFollowingsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutFollowingsInput = UserCreateNestedOneWithoutFollowingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutFollowingsInput", {})
], UserCreateNestedOneWithoutFollowingsInput);
