"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateManyWithoutFollowingNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyFollowingInputEnvelope_1 = require("../inputs/UserFollowsCreateManyFollowingInputEnvelope");
const UserFollowsCreateOrConnectWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateOrConnectWithoutFollowingInput");
const UserFollowsCreateWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateWithoutFollowingInput");
const UserFollowsScalarWhereInput_1 = require("../inputs/UserFollowsScalarWhereInput");
const UserFollowsUpdateManyWithWhereWithoutFollowingInput_1 = require("../inputs/UserFollowsUpdateManyWithWhereWithoutFollowingInput");
const UserFollowsUpdateWithWhereUniqueWithoutFollowingInput_1 = require("../inputs/UserFollowsUpdateWithWhereUniqueWithoutFollowingInput");
const UserFollowsUpsertWithWhereUniqueWithoutFollowingInput_1 = require("../inputs/UserFollowsUpsertWithWhereUniqueWithoutFollowingInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsUpdateManyWithoutFollowingNestedInput = class UserFollowsUpdateManyWithoutFollowingNestedInput {
};
exports.UserFollowsUpdateManyWithoutFollowingNestedInput = UserFollowsUpdateManyWithoutFollowingNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateWithoutFollowingInput_1.UserFollowsCreateWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateOrConnectWithoutFollowingInput_1.UserFollowsCreateOrConnectWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsUpsertWithWhereUniqueWithoutFollowingInput_1.UserFollowsUpsertWithWhereUniqueWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateManyFollowingInputEnvelope_1.UserFollowsCreateManyFollowingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateManyFollowingInputEnvelope_1.UserFollowsCreateManyFollowingInputEnvelope)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsUpdateWithWhereUniqueWithoutFollowingInput_1.UserFollowsUpdateWithWhereUniqueWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsUpdateManyWithWhereWithoutFollowingInput_1.UserFollowsUpdateManyWithWhereWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsScalarWhereInput_1.UserFollowsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsUpdateManyWithoutFollowingNestedInput.prototype, "deleteMany", void 0);
exports.UserFollowsUpdateManyWithoutFollowingNestedInput = UserFollowsUpdateManyWithoutFollowingNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateManyWithoutFollowingNestedInput", {})
], UserFollowsUpdateManyWithoutFollowingNestedInput);
