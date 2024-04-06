"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShareMinAggregate = class ShareMinAggregate {
};
exports.ShareMinAggregate = ShareMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareMinAggregate.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareMinAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShareMinAggregate.prototype, "createdAt", void 0);
exports.ShareMinAggregate = ShareMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShareMinAggregate", {})
], ShareMinAggregate);
