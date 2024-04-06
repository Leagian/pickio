"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeCreateManyPostInput = class LikeCreateManyPostInput {
};
exports.LikeCreateManyPostInput = LikeCreateManyPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyPostInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyPostInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LikeCreateManyPostInput.prototype, "createdAt", void 0);
exports.LikeCreateManyPostInput = LikeCreateManyPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyPostInput", {})
], LikeCreateManyPostInput);
