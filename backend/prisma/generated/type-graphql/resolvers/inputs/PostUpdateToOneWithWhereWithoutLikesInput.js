"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateToOneWithWhereWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutLikesInput_1 = require("../inputs/PostUpdateWithoutLikesInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpdateToOneWithWhereWithoutLikesInput = class PostUpdateToOneWithWhereWithoutLikesInput {
};
exports.PostUpdateToOneWithWhereWithoutLikesInput = PostUpdateToOneWithWhereWithoutLikesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpdateToOneWithWhereWithoutLikesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutLikesInput_1.PostUpdateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutLikesInput_1.PostUpdateWithoutLikesInput)
], PostUpdateToOneWithWhereWithoutLikesInput.prototype, "data", void 0);
exports.PostUpdateToOneWithWhereWithoutLikesInput = PostUpdateToOneWithWhereWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutLikesInput", {})
], PostUpdateToOneWithWhereWithoutLikesInput);
