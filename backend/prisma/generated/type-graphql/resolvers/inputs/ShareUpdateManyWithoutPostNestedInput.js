"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateManyWithoutPostNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyPostInputEnvelope_1 = require("../inputs/ShareCreateManyPostInputEnvelope");
const ShareCreateOrConnectWithoutPostInput_1 = require("../inputs/ShareCreateOrConnectWithoutPostInput");
const ShareCreateWithoutPostInput_1 = require("../inputs/ShareCreateWithoutPostInput");
const ShareScalarWhereInput_1 = require("../inputs/ShareScalarWhereInput");
const ShareUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/ShareUpdateManyWithWhereWithoutPostInput");
const ShareUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/ShareUpdateWithWhereUniqueWithoutPostInput");
const ShareUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/ShareUpsertWithWhereUniqueWithoutPostInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareUpdateManyWithoutPostNestedInput = class ShareUpdateManyWithoutPostNestedInput {
};
exports.ShareUpdateManyWithoutPostNestedInput = ShareUpdateManyWithoutPostNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateWithoutPostInput_1.ShareCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateOrConnectWithoutPostInput_1.ShareCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareUpsertWithWhereUniqueWithoutPostInput_1.ShareUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateManyPostInputEnvelope_1.ShareCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateManyPostInputEnvelope_1.ShareCreateManyPostInputEnvelope)
], ShareUpdateManyWithoutPostNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareUpdateWithWhereUniqueWithoutPostInput_1.ShareUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareUpdateManyWithWhereWithoutPostInput_1.ShareUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareScalarWhereInput_1.ShareScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.ShareUpdateManyWithoutPostNestedInput = ShareUpdateManyWithoutPostNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateManyWithoutPostNestedInput", {})
], ShareUpdateManyWithoutPostNestedInput);
