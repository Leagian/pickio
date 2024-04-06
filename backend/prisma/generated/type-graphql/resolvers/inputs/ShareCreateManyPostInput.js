"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateManyPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShareCreateManyPostInput = class ShareCreateManyPostInput {
};
exports.ShareCreateManyPostInput = ShareCreateManyPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateManyPostInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateManyPostInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareCreateManyPostInput.prototype, "createdAt", void 0);
exports.ShareCreateManyPostInput = ShareCreateManyPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateManyPostInput", {})
], ShareCreateManyPostInput);
