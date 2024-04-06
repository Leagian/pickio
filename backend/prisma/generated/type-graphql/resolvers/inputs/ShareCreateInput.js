"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutSharesInput_1 = require("../inputs/PostCreateNestedOneWithoutSharesInput");
const UserCreateNestedOneWithoutSharesInput_1 = require("../inputs/UserCreateNestedOneWithoutSharesInput");
let ShareCreateInput = class ShareCreateInput {
};
exports.ShareCreateInput = ShareCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSharesInput_1.UserCreateNestedOneWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSharesInput_1.UserCreateNestedOneWithoutSharesInput)
], ShareCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutSharesInput_1.PostCreateNestedOneWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutSharesInput_1.PostCreateNestedOneWithoutSharesInput)
], ShareCreateInput.prototype, "Post", void 0);
exports.ShareCreateInput = ShareCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateInput", {})
], ShareCreateInput);
