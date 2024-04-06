"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateToOneWithWhereWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutSharesInput_1 = require("../inputs/PostUpdateWithoutSharesInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpdateToOneWithWhereWithoutSharesInput = class PostUpdateToOneWithWhereWithoutSharesInput {
};
exports.PostUpdateToOneWithWhereWithoutSharesInput = PostUpdateToOneWithWhereWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpdateToOneWithWhereWithoutSharesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutSharesInput_1.PostUpdateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutSharesInput_1.PostUpdateWithoutSharesInput)
], PostUpdateToOneWithWhereWithoutSharesInput.prototype, "data", void 0);
exports.PostUpdateToOneWithWhereWithoutSharesInput = PostUpdateToOneWithWhereWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutSharesInput", {})
], PostUpdateToOneWithWhereWithoutSharesInput);
