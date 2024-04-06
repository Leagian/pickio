"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShare = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCountAggregate_1 = require("../outputs/ShareCountAggregate");
const ShareMaxAggregate_1 = require("../outputs/ShareMaxAggregate");
const ShareMinAggregate_1 = require("../outputs/ShareMinAggregate");
let AggregateShare = class AggregateShare {
};
exports.AggregateShare = AggregateShare;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCountAggregate_1.ShareCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareCountAggregate_1.ShareCountAggregate)
], AggregateShare.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareMinAggregate_1.ShareMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareMinAggregate_1.ShareMinAggregate)
], AggregateShare.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareMaxAggregate_1.ShareMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareMaxAggregate_1.ShareMaxAggregate)
], AggregateShare.prototype, "_max", void 0);
exports.AggregateShare = AggregateShare = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateShare", {})
], AggregateShare);
