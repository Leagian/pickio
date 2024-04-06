"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateManyPostInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyPostInput_1 = require("../inputs/ShareCreateManyPostInput");
let ShareCreateManyPostInputEnvelope = class ShareCreateManyPostInputEnvelope {
};
exports.ShareCreateManyPostInputEnvelope = ShareCreateManyPostInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateManyPostInput_1.ShareCreateManyPostInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShareCreateManyPostInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShareCreateManyPostInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ShareCreateManyPostInputEnvelope = ShareCreateManyPostInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateManyPostInputEnvelope", {})
], ShareCreateManyPostInputEnvelope);
