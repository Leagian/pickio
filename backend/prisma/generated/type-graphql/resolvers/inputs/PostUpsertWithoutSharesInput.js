"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutSharesInput_1 = require("../inputs/PostCreateWithoutSharesInput");
const PostUpdateWithoutSharesInput_1 = require("../inputs/PostUpdateWithoutSharesInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpsertWithoutSharesInput = class PostUpsertWithoutSharesInput {
};
exports.PostUpsertWithoutSharesInput = PostUpsertWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutSharesInput_1.PostUpdateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutSharesInput_1.PostUpdateWithoutSharesInput)
], PostUpsertWithoutSharesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput)
], PostUpsertWithoutSharesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpsertWithoutSharesInput.prototype, "where", void 0);
exports.PostUpsertWithoutSharesInput = PostUpsertWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithoutSharesInput", {})
], PostUpsertWithoutSharesInput);
