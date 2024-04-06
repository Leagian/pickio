"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyPostInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyPostInput_1 = require("../inputs/LikeCreateManyPostInput");
let LikeCreateManyPostInputEnvelope = class LikeCreateManyPostInputEnvelope {
};
exports.LikeCreateManyPostInputEnvelope = LikeCreateManyPostInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateManyPostInput_1.LikeCreateManyPostInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateManyPostInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LikeCreateManyPostInputEnvelope.prototype, "skipDuplicates", void 0);
exports.LikeCreateManyPostInputEnvelope = LikeCreateManyPostInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyPostInputEnvelope", {})
], LikeCreateManyPostInputEnvelope);
