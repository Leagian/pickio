"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateWithoutUserInput_1 = require("../inputs/ShareCreateWithoutUserInput");
const ShareUpdateWithoutUserInput_1 = require("../inputs/ShareUpdateWithoutUserInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareUpsertWithWhereUniqueWithoutUserInput = class ShareUpsertWithWhereUniqueWithoutUserInput {
};
exports.ShareUpsertWithWhereUniqueWithoutUserInput = ShareUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], ShareUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateWithoutUserInput_1.ShareUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateWithoutUserInput_1.ShareUpdateWithoutUserInput)
], ShareUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateWithoutUserInput_1.ShareCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareCreateWithoutUserInput_1.ShareCreateWithoutUserInput)
], ShareUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.ShareUpsertWithWhereUniqueWithoutUserInput = ShareUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpsertWithWhereUniqueWithoutUserInput", {})
], ShareUpsertWithWhereUniqueWithoutUserInput);
