"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateimagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostCreateimagesInput = class PostCreateimagesInput {
};
exports.PostCreateimagesInput = PostCreateimagesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateimagesInput.prototype, "set", void 0);
exports.PostCreateimagesInput = PostCreateimagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateimagesInput", {})
], PostCreateimagesInput);
