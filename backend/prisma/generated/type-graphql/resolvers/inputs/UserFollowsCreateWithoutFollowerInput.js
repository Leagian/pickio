"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutFollowingsInput_1 = require("../inputs/UserCreateNestedOneWithoutFollowingsInput");
let UserFollowsCreateWithoutFollowerInput = class UserFollowsCreateWithoutFollowerInput {
};
exports.UserFollowsCreateWithoutFollowerInput = UserFollowsCreateWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateWithoutFollowerInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsCreateWithoutFollowerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingsInput_1.UserCreateNestedOneWithoutFollowingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutFollowingsInput_1.UserCreateNestedOneWithoutFollowingsInput)
], UserFollowsCreateWithoutFollowerInput.prototype, "following", void 0);
exports.UserFollowsCreateWithoutFollowerInput = UserFollowsCreateWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateWithoutFollowerInput", {})
], UserFollowsCreateWithoutFollowerInput);
