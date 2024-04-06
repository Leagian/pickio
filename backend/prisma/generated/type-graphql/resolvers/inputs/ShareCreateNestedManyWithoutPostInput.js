"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyPostInputEnvelope_1 = require("../inputs/ShareCreateManyPostInputEnvelope");
const ShareCreateOrConnectWithoutPostInput_1 = require("../inputs/ShareCreateOrConnectWithoutPostInput");
const ShareCreateWithoutPostInput_1 = require("../inputs/ShareCreateWithoutPostInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareCreateNestedManyWithoutPostInput = class ShareCreateNestedManyWithoutPostInput {
};
exports.ShareCreateNestedManyWithoutPostInput = ShareCreateNestedManyWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateWithoutPostInput_1.ShareCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateNestedManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateOrConnectWithoutPostInput_1.ShareCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateManyPostInputEnvelope_1.ShareCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCreateManyPostInputEnvelope_1.ShareCreateManyPostInputEnvelope)
], ShareCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareWhereUniqueInput_1.ShareWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
exports.ShareCreateNestedManyWithoutPostInput = ShareCreateNestedManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateNestedManyWithoutPostInput", {})
], ShareCreateNestedManyWithoutPostInput);
