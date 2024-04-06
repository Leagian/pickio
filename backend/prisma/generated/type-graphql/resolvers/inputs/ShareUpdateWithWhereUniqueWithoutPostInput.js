"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareUpdateWithoutPostInput_1 = require("../inputs/ShareUpdateWithoutPostInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareUpdateWithWhereUniqueWithoutPostInput = class ShareUpdateWithWhereUniqueWithoutPostInput {
};
exports.ShareUpdateWithWhereUniqueWithoutPostInput = ShareUpdateWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], ShareUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateWithoutPostInput_1.ShareUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateWithoutPostInput_1.ShareUpdateWithoutPostInput)
], ShareUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
exports.ShareUpdateWithWhereUniqueWithoutPostInput = ShareUpdateWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateWithWhereUniqueWithoutPostInput", {})
], ShareUpdateWithWhereUniqueWithoutPostInput);
