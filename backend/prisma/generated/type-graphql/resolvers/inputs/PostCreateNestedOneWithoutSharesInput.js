"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutSharesInput_1 = require("../inputs/PostCreateOrConnectWithoutSharesInput");
const PostCreateWithoutSharesInput_1 = require("../inputs/PostCreateWithoutSharesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutSharesInput = class PostCreateNestedOneWithoutSharesInput {
};
exports.PostCreateNestedOneWithoutSharesInput = PostCreateNestedOneWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput)
], PostCreateNestedOneWithoutSharesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutSharesInput_1.PostCreateOrConnectWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutSharesInput_1.PostCreateOrConnectWithoutSharesInput)
], PostCreateNestedOneWithoutSharesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutSharesInput.prototype, "connect", void 0);
exports.PostCreateNestedOneWithoutSharesInput = PostCreateNestedOneWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutSharesInput", {})
], PostCreateNestedOneWithoutSharesInput);
