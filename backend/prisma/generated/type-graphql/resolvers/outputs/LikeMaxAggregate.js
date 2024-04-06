"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeMaxAggregate = class LikeMaxAggregate {
};
exports.LikeMaxAggregate = LikeMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxAggregate.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LikeMaxAggregate.prototype, "createdAt", void 0);
exports.LikeMaxAggregate = LikeMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LikeMaxAggregate", {})
], LikeMaxAggregate);
