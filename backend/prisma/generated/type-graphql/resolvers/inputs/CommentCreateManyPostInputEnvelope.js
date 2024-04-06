"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyPostInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyPostInput_1 = require("../inputs/CommentCreateManyPostInput");
let CommentCreateManyPostInputEnvelope = class CommentCreateManyPostInputEnvelope {
};
exports.CommentCreateManyPostInputEnvelope = CommentCreateManyPostInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyPostInput_1.CommentCreateManyPostInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyPostInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentCreateManyPostInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CommentCreateManyPostInputEnvelope = CommentCreateManyPostInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyPostInputEnvelope", {})
], CommentCreateManyPostInputEnvelope);
