"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyPostInput = class CommentCreateManyPostInput {
};
exports.CommentCreateManyPostInput = CommentCreateManyPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyPostInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyPostInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyPostInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateManyPostInput.prototype, "createdAt", void 0);
exports.CommentCreateManyPostInput = CommentCreateManyPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyPostInput", {})
], CommentCreateManyPostInput);
