"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareUpdateWithoutUserInput_1 = require("../inputs/ShareUpdateWithoutUserInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareUpdateWithWhereUniqueWithoutUserInput = class ShareUpdateWithWhereUniqueWithoutUserInput {
};
exports.ShareUpdateWithWhereUniqueWithoutUserInput = ShareUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], ShareUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateWithoutUserInput_1.ShareUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateWithoutUserInput_1.ShareUpdateWithoutUserInput)
], ShareUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.ShareUpdateWithWhereUniqueWithoutUserInput = ShareUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateWithWhereUniqueWithoutUserInput", {})
], ShareUpdateWithWhereUniqueWithoutUserInput);
