"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateimagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostUpdateimagesInput = class PostUpdateimagesInput {
};
exports.PostUpdateimagesInput = PostUpdateimagesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateimagesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateimagesInput.prototype, "push", void 0);
exports.PostUpdateimagesInput = PostUpdateimagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateimagesInput", {})
], PostUpdateimagesInput);
