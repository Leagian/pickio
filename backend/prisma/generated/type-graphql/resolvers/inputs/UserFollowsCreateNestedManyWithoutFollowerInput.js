"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateNestedManyWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyFollowerInputEnvelope_1 = require("../inputs/UserFollowsCreateManyFollowerInputEnvelope");
const UserFollowsCreateOrConnectWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateOrConnectWithoutFollowerInput");
const UserFollowsCreateWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateWithoutFollowerInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsCreateNestedManyWithoutFollowerInput = class UserFollowsCreateNestedManyWithoutFollowerInput {
};
exports.UserFollowsCreateNestedManyWithoutFollowerInput = UserFollowsCreateNestedManyWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateWithoutFollowerInput_1.UserFollowsCreateWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateNestedManyWithoutFollowerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateOrConnectWithoutFollowerInput_1.UserFollowsCreateOrConnectWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateNestedManyWithoutFollowerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateManyFollowerInputEnvelope_1.UserFollowsCreateManyFollowerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateManyFollowerInputEnvelope_1.UserFollowsCreateManyFollowerInputEnvelope)
], UserFollowsCreateNestedManyWithoutFollowerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateNestedManyWithoutFollowerInput.prototype, "connect", void 0);
exports.UserFollowsCreateNestedManyWithoutFollowerInput = UserFollowsCreateNestedManyWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateNestedManyWithoutFollowerInput", {})
], UserFollowsCreateNestedManyWithoutFollowerInput);
