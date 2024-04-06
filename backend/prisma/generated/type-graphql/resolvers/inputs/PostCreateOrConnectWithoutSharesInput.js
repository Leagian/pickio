"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutSharesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutSharesInput_1 = require("../inputs/PostCreateWithoutSharesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutSharesInput = class PostCreateOrConnectWithoutSharesInput {
};
exports.PostCreateOrConnectWithoutSharesInput = PostCreateOrConnectWithoutSharesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutSharesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput)
], PostCreateOrConnectWithoutSharesInput.prototype, "create", void 0);
exports.PostCreateOrConnectWithoutSharesInput = PostCreateOrConnectWithoutSharesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutSharesInput", {})
], PostCreateOrConnectWithoutSharesInput);
