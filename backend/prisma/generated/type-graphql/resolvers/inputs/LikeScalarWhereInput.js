"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let LikeScalarWhereInput = class LikeScalarWhereInput {
};
exports.LikeScalarWhereInput = LikeScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeScalarWhereInput.prototype, "likeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeScalarWhereInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LikeScalarWhereInput.prototype, "createdAt", void 0);
exports.LikeScalarWhereInput = LikeScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeScalarWhereInput", {})
], LikeScalarWhereInput);
