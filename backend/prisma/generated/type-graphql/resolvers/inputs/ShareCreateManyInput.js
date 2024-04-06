"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShareCreateManyInput = class ShareCreateManyInput {
};
exports.ShareCreateManyInput = ShareCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateManyInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateManyInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShareCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareCreateManyInput.prototype, "createdAt", void 0);
exports.ShareCreateManyInput = ShareCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateManyInput", {})
], ShareCreateManyInput);
