"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyUserInput_1 = require("../inputs/ShareCreateManyUserInput");
let ShareCreateManyUserInputEnvelope = class ShareCreateManyUserInputEnvelope {
};
exports.ShareCreateManyUserInputEnvelope = ShareCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateManyUserInput_1.ShareCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShareCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ShareCreateManyUserInputEnvelope = ShareCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateManyUserInputEnvelope", {})
], ShareCreateManyUserInputEnvelope);
