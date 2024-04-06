"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCountAggregate_1 = require("../outputs/ShareCountAggregate");
const ShareMaxAggregate_1 = require("../outputs/ShareMaxAggregate");
const ShareMinAggregate_1 = require("../outputs/ShareMinAggregate");
let ShareGroupBy = class ShareGroupBy {
};
exports.ShareGroupBy = ShareGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShareGroupBy.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShareGroupBy.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShareGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShareGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCountAggregate_1.ShareCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCountAggregate_1.ShareCountAggregate)
], ShareGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareMinAggregate_1.ShareMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareMinAggregate_1.ShareMinAggregate)
], ShareGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareMaxAggregate_1.ShareMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareMaxAggregate_1.ShareMaxAggregate)
], ShareGroupBy.prototype, "_max", void 0);
exports.ShareGroupBy = ShareGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShareGroupBy", {})
], ShareGroupBy);
