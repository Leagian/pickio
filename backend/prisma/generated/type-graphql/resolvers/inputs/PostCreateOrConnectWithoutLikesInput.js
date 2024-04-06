"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutLikesInput_1 = require("../inputs/PostCreateWithoutLikesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutLikesInput = class PostCreateOrConnectWithoutLikesInput {
};
exports.PostCreateOrConnectWithoutLikesInput = PostCreateOrConnectWithoutLikesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutLikesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput)
], PostCreateOrConnectWithoutLikesInput.prototype, "create", void 0);
exports.PostCreateOrConnectWithoutLikesInput = PostCreateOrConnectWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutLikesInput", {})
], PostCreateOrConnectWithoutLikesInput);
