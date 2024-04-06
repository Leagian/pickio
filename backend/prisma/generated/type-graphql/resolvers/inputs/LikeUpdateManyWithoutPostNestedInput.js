"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateManyWithoutPostNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyPostInputEnvelope_1 = require("../inputs/LikeCreateManyPostInputEnvelope");
const LikeCreateOrConnectWithoutPostInput_1 = require("../inputs/LikeCreateOrConnectWithoutPostInput");
const LikeCreateWithoutPostInput_1 = require("../inputs/LikeCreateWithoutPostInput");
const LikeScalarWhereInput_1 = require("../inputs/LikeScalarWhereInput");
const LikeUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/LikeUpdateManyWithWhereWithoutPostInput");
const LikeUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/LikeUpdateWithWhereUniqueWithoutPostInput");
const LikeUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/LikeUpsertWithWhereUniqueWithoutPostInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpdateManyWithoutPostNestedInput = class LikeUpdateManyWithoutPostNestedInput {
};
exports.LikeUpdateManyWithoutPostNestedInput = LikeUpdateManyWithoutPostNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateWithoutPostInput_1.LikeCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutPostInput_1.LikeCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutPostInput_1.LikeUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateManyPostInputEnvelope_1.LikeCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateManyPostInputEnvelope_1.LikeCreateManyPostInputEnvelope)
], LikeUpdateManyWithoutPostNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutPostInput_1.LikeUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutPostInput_1.LikeUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput_1.LikeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.LikeUpdateManyWithoutPostNestedInput = LikeUpdateManyWithoutPostNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateManyWithoutPostNestedInput", {})
], LikeUpdateManyWithoutPostNestedInput);
