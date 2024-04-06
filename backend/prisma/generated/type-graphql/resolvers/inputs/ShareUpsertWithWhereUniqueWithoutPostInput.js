"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateWithoutPostInput_1 = require("../inputs/ShareCreateWithoutPostInput");
const ShareUpdateWithoutPostInput_1 = require("../inputs/ShareUpdateWithoutPostInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareUpsertWithWhereUniqueWithoutPostInput = class ShareUpsertWithWhereUniqueWithoutPostInput {
};
exports.ShareUpsertWithWhereUniqueWithoutPostInput = ShareUpsertWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], ShareUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateWithoutPostInput_1.ShareUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateWithoutPostInput_1.ShareUpdateWithoutPostInput)
], ShareUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateWithoutPostInput_1.ShareCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareCreateWithoutPostInput_1.ShareCreateWithoutPostInput)
], ShareUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
exports.ShareUpsertWithWhereUniqueWithoutPostInput = ShareUpsertWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpsertWithWhereUniqueWithoutPostInput", {})
], ShareUpsertWithWhereUniqueWithoutPostInput);
