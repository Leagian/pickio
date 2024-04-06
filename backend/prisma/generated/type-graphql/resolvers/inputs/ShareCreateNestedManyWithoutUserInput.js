"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyUserInputEnvelope_1 = require("../inputs/ShareCreateManyUserInputEnvelope");
const ShareCreateOrConnectWithoutUserInput_1 = require("../inputs/ShareCreateOrConnectWithoutUserInput");
const ShareCreateWithoutUserInput_1 = require("../inputs/ShareCreateWithoutUserInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareCreateNestedManyWithoutUserInput = class ShareCreateNestedManyWithoutUserInput {
};
exports.ShareCreateNestedManyWithoutUserInput = ShareCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateWithoutUserInput_1.ShareCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateOrConnectWithoutUserInput_1.ShareCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateManyUserInputEnvelope_1.ShareCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateManyUserInputEnvelope_1.ShareCreateManyUserInputEnvelope)
], ShareCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.ShareCreateNestedManyWithoutUserInput = ShareCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateNestedManyWithoutUserInput", {})
], ShareCreateNestedManyWithoutUserInput);
