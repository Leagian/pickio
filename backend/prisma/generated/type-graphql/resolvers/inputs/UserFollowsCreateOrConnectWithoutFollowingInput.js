"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateOrConnectWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateWithoutFollowingInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsCreateOrConnectWithoutFollowingInput = class UserFollowsCreateOrConnectWithoutFollowingInput {
};
exports.UserFollowsCreateOrConnectWithoutFollowingInput = UserFollowsCreateOrConnectWithoutFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UserFollowsCreateOrConnectWithoutFollowingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateWithoutFollowingInput_1.UserFollowsCreateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateWithoutFollowingInput_1.UserFollowsCreateWithoutFollowingInput)
], UserFollowsCreateOrConnectWithoutFollowingInput.prototype, "create", void 0);
exports.UserFollowsCreateOrConnectWithoutFollowingInput = UserFollowsCreateOrConnectWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateOrConnectWithoutFollowingInput", {})
], UserFollowsCreateOrConnectWithoutFollowingInput);
