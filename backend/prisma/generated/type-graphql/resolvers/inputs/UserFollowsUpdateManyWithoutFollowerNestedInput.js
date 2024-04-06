"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateManyWithoutFollowerNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyFollowerInputEnvelope_1 = require("../inputs/UserFollowsCreateManyFollowerInputEnvelope");
const UserFollowsCreateOrConnectWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateOrConnectWithoutFollowerInput");
const UserFollowsCreateWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateWithoutFollowerInput");
const UserFollowsScalarWhereInput_1 = require("../inputs/UserFollowsScalarWhereInput");
const UserFollowsUpdateManyWithWhereWithoutFollowerInput_1 = require("../inputs/UserFollowsUpdateManyWithWhereWithoutFollowerInput");
const UserFollowsUpdateWithWhereUniqueWithoutFollowerInput_1 = require("../inputs/UserFollowsUpdateWithWhereUniqueWithoutFollowerInput");
const UserFollowsUpsertWithWhereUniqueWithoutFollowerInput_1 = require("../inputs/UserFollowsUpsertWithWhereUniqueWithoutFollowerInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsUpdateManyWithoutFollowerNestedInput = class UserFollowsUpdateManyWithoutFollowerNestedInput {
};
exports.UserFollowsUpdateManyWithoutFollowerNestedInput = UserFollowsUpdateManyWithoutFollowerNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateWithoutFollowerInput_1.UserFollowsCreateWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateOrConnectWithoutFollowerInput_1.UserFollowsCreateOrConnectWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsUpsertWithWhereUniqueWithoutFollowerInput_1.UserFollowsUpsertWithWhereUniqueWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateManyFollowerInputEnvelope_1.UserFollowsCreateManyFollowerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateManyFollowerInputEnvelope_1.UserFollowsCreateManyFollowerInputEnvelope)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsUpdateWithWhereUniqueWithoutFollowerInput_1.UserFollowsUpdateWithWhereUniqueWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsUpdateManyWithWhereWithoutFollowerInput_1.UserFollowsUpdateManyWithWhereWithoutFollowerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsScalarWhereInput_1.UserFollowsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowerNestedInput.prototype, "deleteMany", void 0);
exports.UserFollowsUpdateManyWithoutFollowerNestedInput = UserFollowsUpdateManyWithoutFollowerNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateManyWithoutFollowerNestedInput", {})
], UserFollowsUpdateManyWithoutFollowerNestedInput);
