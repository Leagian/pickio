"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreatetagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostCreatetagsInput = class PostCreatetagsInput {
};
exports.PostCreatetagsInput = PostCreatetagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreatetagsInput.prototype, "set", void 0);
exports.PostCreatetagsInput = PostCreatetagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreatetagsInput", {})
], PostCreatetagsInput);
