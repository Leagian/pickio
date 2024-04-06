"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutFollowersInput_1 = require("../inputs/UserCreateNestedOneWithoutFollowersInput");
let UserFollowsCreateWithoutFollowingInput = class UserFollowsCreateWithoutFollowingInput {
};
exports.UserFollowsCreateWithoutFollowingInput = UserFollowsCreateWithoutFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateWithoutFollowingInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsCreateWithoutFollowingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowersInput_1.UserCreateNestedOneWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutFollowersInput_1.UserCreateNestedOneWithoutFollowersInput)
], UserFollowsCreateWithoutFollowingInput.prototype, "follower", void 0);
exports.UserFollowsCreateWithoutFollowingInput = UserFollowsCreateWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateWithoutFollowingInput", {})
], UserFollowsCreateWithoutFollowingInput);
