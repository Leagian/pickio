"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutSharesInput_1 = require("../inputs/PostCreateNestedOneWithoutSharesInput");
let ShareCreateWithoutUserInput = class ShareCreateWithoutUserInput {
};
exports.ShareCreateWithoutUserInput = ShareCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateWithoutUserInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutSharesInput_1.PostCreateNestedOneWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutSharesInput_1.PostCreateNestedOneWithoutSharesInput)
], ShareCreateWithoutUserInput.prototype, "Post", void 0);
exports.ShareCreateWithoutUserInput = ShareCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateWithoutUserInput", {})
], ShareCreateWithoutUserInput);
