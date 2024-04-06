"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutLikesInput_1 = require("../inputs/PostCreateOrConnectWithoutLikesInput");
const PostCreateWithoutLikesInput_1 = require("../inputs/PostCreateWithoutLikesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutLikesInput = class PostCreateNestedOneWithoutLikesInput {
};
exports.PostCreateNestedOneWithoutLikesInput = PostCreateNestedOneWithoutLikesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput)
], PostCreateNestedOneWithoutLikesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutLikesInput_1.PostCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutLikesInput_1.PostCreateOrConnectWithoutLikesInput)
], PostCreateNestedOneWithoutLikesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutLikesInput.prototype, "connect", void 0);
exports.PostCreateNestedOneWithoutLikesInput = PostCreateNestedOneWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutLikesInput", {})
], PostCreateNestedOneWithoutLikesInput);
