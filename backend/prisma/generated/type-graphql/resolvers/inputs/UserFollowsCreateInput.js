"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutFollowersInput_1 = require("../inputs/UserCreateNestedOneWithoutFollowersInput");
const UserCreateNestedOneWithoutFollowingsInput_1 = require("../inputs/UserCreateNestedOneWithoutFollowingsInput");
let UserFollowsCreateInput = class UserFollowsCreateInput {
};
exports.UserFollowsCreateInput = UserFollowsCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowersInput_1.UserCreateNestedOneWithoutFollowersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutFollowersInput_1.UserCreateNestedOneWithoutFollowersInput)
], UserFollowsCreateInput.prototype, "follower", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingsInput_1.UserCreateNestedOneWithoutFollowingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutFollowingsInput_1.UserCreateNestedOneWithoutFollowingsInput)
], UserFollowsCreateInput.prototype, "following", void 0);
exports.UserFollowsCreateInput = UserFollowsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateInput", {})
], UserFollowsCreateInput);
