"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutSharesInput_1 = require("../inputs/UserCreateNestedOneWithoutSharesInput");
let ShareCreateWithoutPostInput = class ShareCreateWithoutPostInput {
};
exports.ShareCreateWithoutPostInput = ShareCreateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateWithoutPostInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareCreateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSharesInput_1.UserCreateNestedOneWithoutSharesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSharesInput_1.UserCreateNestedOneWithoutSharesInput)
], ShareCreateWithoutPostInput.prototype, "User", void 0);
exports.ShareCreateWithoutPostInput = ShareCreateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateWithoutPostInput", {})
], ShareCreateWithoutPostInput);
