"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutLikesInput_1 = require("../inputs/PostCreateWithoutLikesInput");
const PostUpdateWithoutLikesInput_1 = require("../inputs/PostUpdateWithoutLikesInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpsertWithoutLikesInput = class PostUpsertWithoutLikesInput {
};
exports.PostUpsertWithoutLikesInput = PostUpsertWithoutLikesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutLikesInput_1.PostUpdateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutLikesInput_1.PostUpdateWithoutLikesInput)
], PostUpsertWithoutLikesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput)
], PostUpsertWithoutLikesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpsertWithoutLikesInput.prototype, "where", void 0);
exports.PostUpsertWithoutLikesInput = PostUpsertWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithoutLikesInput", {})
], PostUpsertWithoutLikesInput);
