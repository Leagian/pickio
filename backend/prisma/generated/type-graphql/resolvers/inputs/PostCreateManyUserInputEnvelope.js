"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyUserInput_1 = require("../inputs/PostCreateManyUserInput");
let PostCreateManyUserInputEnvelope = class PostCreateManyUserInputEnvelope {
};
exports.PostCreateManyUserInputEnvelope = PostCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyUserInput_1.PostCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.PostCreateManyUserInputEnvelope = PostCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyUserInputEnvelope", {})
], PostCreateManyUserInputEnvelope);
