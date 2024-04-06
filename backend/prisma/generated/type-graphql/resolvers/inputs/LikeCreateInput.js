"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutLikesInput_1 = require("../inputs/PostCreateNestedOneWithoutLikesInput");
const UserCreateNestedOneWithoutLikesInput_1 = require("../inputs/UserCreateNestedOneWithoutLikesInput");
let LikeCreateInput = class LikeCreateInput {
};
exports.LikeCreateInput = LikeCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LikeCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput)
], LikeCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikesInput_1.PostCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutLikesInput_1.PostCreateNestedOneWithoutLikesInput)
], LikeCreateInput.prototype, "Post", void 0);
exports.LikeCreateInput = LikeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateInput", {})
], LikeCreateInput);
