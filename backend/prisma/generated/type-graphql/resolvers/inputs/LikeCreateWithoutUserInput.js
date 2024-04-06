"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutLikesInput_1 = require("../inputs/PostCreateNestedOneWithoutLikesInput");
let LikeCreateWithoutUserInput = class LikeCreateWithoutUserInput {
};
exports.LikeCreateWithoutUserInput = LikeCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateWithoutUserInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LikeCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikesInput_1.PostCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutLikesInput_1.PostCreateNestedOneWithoutLikesInput)
], LikeCreateWithoutUserInput.prototype, "Post", void 0);
exports.LikeCreateWithoutUserInput = LikeCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateWithoutUserInput", {})
], LikeCreateWithoutUserInput);
