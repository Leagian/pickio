"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyPostInputEnvelope_1 = require("../inputs/LikeCreateManyPostInputEnvelope");
const LikeCreateOrConnectWithoutPostInput_1 = require("../inputs/LikeCreateOrConnectWithoutPostInput");
const LikeCreateWithoutPostInput_1 = require("../inputs/LikeCreateWithoutPostInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeCreateNestedManyWithoutPostInput = class LikeCreateNestedManyWithoutPostInput {
};
exports.LikeCreateNestedManyWithoutPostInput = LikeCreateNestedManyWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateWithoutPostInput_1.LikeCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutPostInput_1.LikeCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateManyPostInputEnvelope_1.LikeCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateManyPostInputEnvelope_1.LikeCreateManyPostInputEnvelope)
], LikeCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
exports.LikeCreateNestedManyWithoutPostInput = LikeCreateNestedManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateNestedManyWithoutPostInput", {})
], LikeCreateNestedManyWithoutPostInput);
