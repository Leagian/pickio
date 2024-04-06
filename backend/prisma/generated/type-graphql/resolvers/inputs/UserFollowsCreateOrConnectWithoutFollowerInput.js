"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateOrConnectWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateWithoutFollowerInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsCreateOrConnectWithoutFollowerInput = class UserFollowsCreateOrConnectWithoutFollowerInput {
};
exports.UserFollowsCreateOrConnectWithoutFollowerInput = UserFollowsCreateOrConnectWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UserFollowsCreateOrConnectWithoutFollowerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateWithoutFollowerInput_1.UserFollowsCreateWithoutFollowerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateWithoutFollowerInput_1.UserFollowsCreateWithoutFollowerInput)
], UserFollowsCreateOrConnectWithoutFollowerInput.prototype, "create", void 0);
exports.UserFollowsCreateOrConnectWithoutFollowerInput = UserFollowsCreateOrConnectWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateOrConnectWithoutFollowerInput", {})
], UserFollowsCreateOrConnectWithoutFollowerInput);
