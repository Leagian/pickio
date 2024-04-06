"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateNestedManyWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyFollowingInputEnvelope_1 = require("../inputs/UserFollowsCreateManyFollowingInputEnvelope");
const UserFollowsCreateOrConnectWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateOrConnectWithoutFollowingInput");
const UserFollowsCreateWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateWithoutFollowingInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsCreateNestedManyWithoutFollowingInput = class UserFollowsCreateNestedManyWithoutFollowingInput {
};
exports.UserFollowsCreateNestedManyWithoutFollowingInput = UserFollowsCreateNestedManyWithoutFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateWithoutFollowingInput_1.UserFollowsCreateWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateNestedManyWithoutFollowingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateOrConnectWithoutFollowingInput_1.UserFollowsCreateOrConnectWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateNestedManyWithoutFollowingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateManyFollowingInputEnvelope_1.UserFollowsCreateManyFollowingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateManyFollowingInputEnvelope_1.UserFollowsCreateManyFollowingInputEnvelope)
], UserFollowsCreateNestedManyWithoutFollowingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateNestedManyWithoutFollowingInput.prototype, "connect", void 0);
exports.UserFollowsCreateNestedManyWithoutFollowingInput = UserFollowsCreateNestedManyWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateNestedManyWithoutFollowingInput", {})
], UserFollowsCreateNestedManyWithoutFollowingInput);
