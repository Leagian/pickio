"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeCreateManyUserInput = class LikeCreateManyUserInput {
};
exports.LikeCreateManyUserInput = LikeCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyUserInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyUserInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LikeCreateManyUserInput.prototype, "createdAt", void 0);
exports.LikeCreateManyUserInput = LikeCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyUserInput", {})
], LikeCreateManyUserInput);
