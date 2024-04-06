"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareOrderByWithAggregationInput_1 = require("../../../inputs/ShareOrderByWithAggregationInput");
const ShareScalarWhereWithAggregatesInput_1 = require("../../../inputs/ShareScalarWhereWithAggregatesInput");
const ShareWhereInput_1 = require("../../../inputs/ShareWhereInput");
const ShareScalarFieldEnum_1 = require("../../../../enums/ShareScalarFieldEnum");
let GroupByShareArgs = class GroupByShareArgs {
};
exports.GroupByShareArgs = GroupByShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereInput_1.ShareWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereInput_1.ShareWhereInput)
], GroupByShareArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareOrderByWithAggregationInput_1.ShareOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShareArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareScalarFieldEnum_1.ShareScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShareArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareScalarWhereWithAggregatesInput_1.ShareScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareScalarWhereWithAggregatesInput_1.ShareScalarWhereWithAggregatesInput)
], GroupByShareArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShareArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShareArgs.prototype, "skip", void 0);
exports.GroupByShareArgs = GroupByShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByShareArgs);
