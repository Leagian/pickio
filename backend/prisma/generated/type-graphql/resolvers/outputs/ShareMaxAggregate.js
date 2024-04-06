"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShareMaxAggregate = class ShareMaxAggregate {
};
exports.ShareMaxAggregate = ShareMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareMaxAggregate.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareMaxAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareMaxAggregate.prototype, "createdAt", void 0);
exports.ShareMaxAggregate = ShareMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShareMaxAggregate", {})
], ShareMaxAggregate);
