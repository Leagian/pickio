"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutLikesInput_1 = require("../inputs/UserCreateNestedOneWithoutLikesInput");
let LikeCreateWithoutPostInput = class LikeCreateWithoutPostInput {
};
exports.LikeCreateWithoutPostInput = LikeCreateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateWithoutPostInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LikeCreateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput)
], LikeCreateWithoutPostInput.prototype, "User", void 0);
exports.LikeCreateWithoutPostInput = LikeCreateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateWithoutPostInput", {})
], LikeCreateWithoutPostInput);
