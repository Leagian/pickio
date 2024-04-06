"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdatetagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostUpdatetagsInput = class PostUpdatetagsInput {
};
exports.PostUpdatetagsInput = PostUpdatetagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdatetagsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdatetagsInput.prototype, "push", void 0);
exports.PostUpdatetagsInput = PostUpdatetagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdatetagsInput", {})
], PostUpdatetagsInput);
