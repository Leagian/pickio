"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyUserInputEnvelope_1 = require("../inputs/ShareCreateManyUserInputEnvelope");
const ShareCreateOrConnectWithoutUserInput_1 = require("../inputs/ShareCreateOrConnectWithoutUserInput");
const ShareCreateWithoutUserInput_1 = require("../inputs/ShareCreateWithoutUserInput");
const ShareScalarWhereInput_1 = require("../inputs/ShareScalarWhereInput");
const ShareUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ShareUpdateManyWithWhereWithoutUserInput");
const ShareUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ShareUpdateWithWhereUniqueWithoutUserInput");
const ShareUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ShareUpsertWithWhereUniqueWithoutUserInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareUpdateManyWithoutUserNestedInput = class ShareUpdateManyWithoutUserNestedInput {
};
exports.ShareUpdateManyWithoutUserNestedInput = ShareUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateWithoutUserInput_1.ShareCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateOrConnectWithoutUserInput_1.ShareCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareUpsertWithWhereUniqueWithoutUserInput_1.ShareUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateManyUserInputEnvelope_1.ShareCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateManyUserInputEnvelope_1.ShareCreateManyUserInputEnvelope)
], ShareUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareUpdateWithWhereUniqueWithoutUserInput_1.ShareUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareUpdateManyWithWhereWithoutUserInput_1.ShareUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareScalarWhereInput_1.ShareScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.ShareUpdateManyWithoutUserNestedInput = ShareUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateManyWithoutUserNestedInput", {})
], ShareUpdateManyWithoutUserNestedInput);
